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

    <!-- ponytail: one shared dialog, stage 1 fits the viewport, stage 2 is 1:1 -->
    <v-dialog
      :model-value="zoom !== null"
      @update:model-value="close"
      width="auto"
      max-width="none"
    >
      <img
        v-if="zoom !== null && stage === 1"
        :src="images[zoom].full"
        style="display: block; max-width: 95vw; max-height: 95vh; cursor: zoom-in"
        @pointerdown="onPointerDown"
        @pointerup="onPointerUp"
        @click="onClick"
      />

      <!-- ponytail: overflow:auto is the panning; only the mouse needs a drag handler -->
      <div
        v-else-if="zoom !== null"
        ref="pan"
        class="pan"
        @click.self="close"
      >
        <img
          :src="images[zoom].full"
          :style="{
            display: 'block',
            maxWidth: 'none',
            cursor: panning ? 'grabbing' : 'grab',
          }"
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

export default {
  props: {
    previews: { type: Object, required: true },
    originals: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      zoom: null,
      stage: 1,
      downX: 0,
      downY: 0,
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
  },
  watch: {
    zoom() {
      this.stage = 1;
    },
  },
  mounted() {
    window.addEventListener("keydown", this.onKey);
  },
  unmounted() {
    window.removeEventListener("keydown", this.onKey);
  },
  methods: {
    close() {
      this.zoom = null;
    },
    onKey(e) {
      if (this.zoom === null || this.stage === 2) return;
      if (e.key === "ArrowRight") this.step(1);
      else if (e.key === "ArrowLeft") this.step(-1);
    },
    step(d) {
      const n = this.images.length;
      this.zoom = (this.zoom + d + n) % n;
    },
    onPointerDown(e) {
      this.downX = e.clientX;
      this.downY = e.clientY;

      if (this.stage === 2 && e.pointerType === "mouse") {
        this.panning = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        e.preventDefault(); // stops the browser's native image drag-and-drop
      }
    },
    onPointerMove(e) {
      if (!this.panning) return;
      const el = this.$refs.pan;
      el.scrollLeft -= e.movementX;
      el.scrollTop -= e.movementY;
    },
    onPointerUp(e) {
      this.panning = false;

      // swipe navigates, but only in fit view and only by finger
      if (this.stage === 1 && e.pointerType !== "mouse") {
        const dx = e.clientX - this.downX;
        if (Math.abs(dx) > SWIPE) this.step(dx < 0 ? 1 : -1);
      }
    },
    onClick(e) {
      // a pan or a swipe also ends in a click; only a near-stationary one counts
      if (Math.hypot(e.clientX - this.downX, e.clientY - this.downY) > TAP) return;

      if (this.stage === 2) {
        this.stage = 1;
        return;
      }

      // enter 1:1 looking at the spot that was clicked, not at the centre
      const r = e.currentTarget.getBoundingClientRect();
      const fx = (e.clientX - r.left) / r.width;
      const fy = (e.clientY - r.top) / r.height;
      this.stage = 2;
      this.$nextTick(() => {
        const el = this.$refs.pan;
        if (!el) return;
        el.scrollLeft = fx * el.scrollWidth - el.clientWidth / 2;
        el.scrollTop = fy * el.scrollHeight - el.clientHeight / 2;
      });
    },
  },
};
</script>

<style scoped>
.pan {
  width: 95vw;
  height: 95vh;
  overflow: auto;
  display: grid;
  place-content: safe center;
  overscroll-behavior: contain;
  scrollbar-width: none; /* Firefox */
}

/* dragging replaces the scrollbar, so hide it (Chrome/Safari) */
.pan::-webkit-scrollbar {
  display: none;
}
</style>
