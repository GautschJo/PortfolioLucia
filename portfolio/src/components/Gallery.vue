<template>
  <div style="margin: 30px auto 0; max-width: 1200px">
    <!-- ponytail: aspect-ratio reserves height so v-img's observer defers off-screen loads -->
    <v-row
      v-for="(image, index) in images"
      :key="index"
      style="margin-bottom: 30px"
    >
      <v-img
        :src="image.img"
        :aspect-ratio="16 / 9"
        style="cursor: zoom-in"
        @click="zoom = index"
      />
    </v-row>

    <!-- ponytail: sizing the img in px (not a transform) keeps scroll bounds correct
         at every scale, so panning stays the container's job -->
    <v-dialog
      :model-value="zoom !== null"
      @update:model-value="close"
      width="auto"
      max-width="none"
    >
      <div v-if="zoom !== null" ref="pan" class="pan" @click.self="close">
        <img
          ref="img"
          :src="images[zoom].full"
          :style="imgStyle"
          @load="onLoad"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
          @click="onClick"
        />
      </div>
    </v-dialog>
  </div>
</template>

<script>
// Callers pass two import.meta.glob results: the compressed previews shown in the
// grid, and the high-res originals named 1.png, 2.png, ... A preview whose number
// has no original just zooms to itself.
const num = (path) => parseInt(path.split("/").pop(), 10);

const SWIPE = 50; // px of travel that counts as a swipe rather than a tap
const TAP = 10; // px of slop still counted as a tap
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

export default {
  props: {
    previews: { type: Object, required: true },
    originals: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      zoom: null,
      natural: null, // { w, h } once the open image has loaded
      scale: 1, // 1 = natural pixel size
      fit: 1, // smallest allowed scale: the image fitted to the dialog
      panning: false,
    };
  },
  computed: {
    images() {
      const byNumber = {};
      for (const path in this.originals) byNumber[num(path)] = this.originals[path];

      return Object.keys(this.previews)
        .sort((a, b) => num(a) - num(b))
        .map((k) => ({
          img: this.previews[k],
          full: byNumber[num(k)] ?? this.previews[k],
        }));
    },
    imgStyle() {
      const cursor = this.zoomedIn
        ? this.panning
          ? "grabbing"
          : "grab"
        : "zoom-in";

      // until @load reports the natural size, just fit it
      if (!this.natural) return { display: "block", maxWidth: "100%", maxHeight: "100%", cursor };
      return {
        display: "block",
        width: this.natural.w * this.scale + "px",
        maxWidth: "none",
        cursor,
      };
    },
    zoomedIn() {
      return this.scale > this.fit;
    },
  },
  watch: {
    zoom() {
      this.natural = null; // the next image re-measures itself on load
    },
  },
  created() {
    // deliberately not reactive: these churn on every pointermove
    this.pointers = new Map();
    this.pinch = null;
    this.multi = false;
    this.downX = 0;
    this.downY = 0;
    this.lastType = "mouse";
  },
  mounted() {
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("resize", this.measure);
  },
  unmounted() {
    window.removeEventListener("keydown", this.onKey);
    window.removeEventListener("resize", this.measure);
  },
  methods: {
    close() {
      this.zoom = null;
    },
    step(d) {
      const n = this.images.length;
      this.zoom = (this.zoom + d + n) % n;
    },
    onKey(e) {
      if (this.zoom === null || this.zoomedIn) return;
      if (e.key === "ArrowRight") this.step(1);
      else if (e.key === "ArrowLeft") this.step(-1);
    },
    onLoad(e) {
      this.natural = { w: e.target.naturalWidth, h: e.target.naturalHeight };
      this.measure();
      this.scale = this.fit;
    },
    measure() {
      const pan = this.$refs.pan;
      if (!pan || !this.natural) return;
      // never blow an image up past its own pixels, so fit can only be <= 1
      this.fit = Math.min(1, pan.clientWidth / this.natural.w, pan.clientHeight / this.natural.h);
      this.scale = clamp(this.scale, this.fit, 1);
    },

    // --- gestures -------------------------------------------------------
    spread() {
      const [a, b] = [...this.pointers.values()];
      return Math.hypot(b.x - a.x, b.y - a.y);
    },
    mid() {
      const [a, b] = [...this.pointers.values()];
      return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    },
    onPointerDown(e) {
      e.currentTarget.setPointerCapture(e.pointerId);
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      this.downX = e.clientX;
      this.downY = e.clientY;
      this.lastType = e.pointerType;
      if (e.pointerType === "mouse") e.preventDefault(); // no native image drag

      if (this.pointers.size === 2) {
        this.multi = true;
        this.pinch = { dist: this.spread(), scale: this.scale };
      } else if (this.pointers.size === 1 && this.zoomedIn) {
        this.panning = true;
      }
    },
    onPointerMove(e) {
      const p = this.pointers.get(e.pointerId);
      if (!p) return;
      const dx = e.clientX - p.x;
      const dy = e.clientY - p.y;
      p.x = e.clientX;
      p.y = e.clientY;

      if (this.pinch && this.pointers.size === 2) {
        const m = this.mid();
        const next = clamp((this.pinch.scale * this.spread()) / this.pinch.dist, this.fit, 1);
        this.anchorAt(m.x, m.y, next);
      } else if (this.panning) {
        this.$refs.pan.scrollLeft -= dx;
        this.$refs.pan.scrollTop -= dy;
      }
    },
    onPointerUp(e) {
      this.pointers.delete(e.pointerId);
      if (this.pointers.size < 2) this.pinch = null;
      if (this.pointers.size > 0) return;

      this.panning = false;
      const wasPinch = this.multi;
      this.multi = false;

      // swipe navigates, but only by finger, only fully zoomed out, and never as
      // the tail of a pinch that happened to land back at the fitted size
      if (!wasPinch && e.pointerType !== "mouse" && !this.zoomedIn) {
        const dx = e.clientX - this.downX;
        if (Math.abs(dx) > SWIPE) this.step(dx < 0 ? 1 : -1);
      }
    },
    onClick(e) {
      if (this.lastType !== "mouse") return; // on touch, pinch is the only zoom
      // a drag also ends in a click; only a near-stationary one counts
      if (Math.hypot(e.clientX - this.downX, e.clientY - this.downY) > TAP) return;

      this.anchorAt(e.clientX, e.clientY, this.zoomedIn ? this.fit : 1);
    },
    // keep the point under the cursor/fingers put while the scale changes
    anchorAt(clientX, clientY, next) {
      const img = this.$refs.img;
      const pan = this.$refs.pan;
      const ir = img.getBoundingClientRect();
      const pr = pan.getBoundingClientRect();
      const fx = (clientX - ir.left) / ir.width;
      const fy = (clientY - ir.top) / ir.height;

      this.scale = next;
      this.$nextTick(() => {
        // offsetLeft/Top absorb the centring `place-content` applies while the
        // image is smaller than the container; the browser clamps out-of-range
        pan.scrollLeft = img.offsetLeft + fx * img.offsetWidth - (clientX - pr.left);
        pan.scrollTop = img.offsetTop + fy * img.offsetHeight - (clientY - pr.top);
      });
    },
  },
};
</script>

<style scoped>
.pan {
  position: relative; /* makes the image's offsetLeft/Top relative to this box */
  width: 95vw;
  height: 95vh;
  overflow: auto;
  display: grid;
  place-content: safe center;
  overscroll-behavior: contain;
  touch-action: none; /* both fingers of a pinch must reach us, not the browser */
  scrollbar-width: none; /* Firefox */
}

/* dragging replaces the scrollbar, so hide it (Chrome/Safari) */
.pan::-webkit-scrollbar {
  display: none;
}
</style>
