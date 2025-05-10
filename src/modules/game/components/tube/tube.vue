<template>
  <button
    class="tube"
    :style
    :aria-label="`Tube ${index + 1}`"
    @click="handleClick"
  ></button>
</template>

<script setup lang="ts">
import {
  HEIGHT_OFFSET_PERCENTAGE,
  WIDTH_PADDING_PERCENTAGE,
} from '@/modules/common/helpers/constants';
import type { Coordinate } from '@/modules/common/interfaces/common';
import { computed, type StyleValue } from 'vue';

const props = withDefaults(
  defineProps<{
    size: number;
    capacity: number;
    index: number;
    isComplete?: boolean;
    showConfetti?: boolean;
  }>(),
  {
    isComplete: false,
    showConfetti: false,
  },
);
const emits = defineEmits<{
  click: [index: number];
  handlePosition: [data: Coordinate];
}>();

const style = computed<StyleValue>(() => {
  const width = Math.round(props.size + props.size * WIDTH_PADDING_PERCENTAGE);
  const borderWidth = Math.round(width - width * 0.95);
  const height = Math.round(
    props.size * props.capacity + props.size * HEIGHT_OFFSET_PERCENTAGE,
  );

  return {
    width: `${width}px`,
    borderWidth: `${borderWidth}px`,
    height: `${height}px`,
  };
});

function handleClick(): void {
  emits('click', props.index);
}
</script>

<style scoped>
.tube {
  background-color: transparent;
  border-color: #8e8e8d;
  border-radius: 7px 7px 20px 20px;
  border-style: solid;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  z-index: 2;

  &::after {
    background:
      linear-gradient(
        to left,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(255, 255, 255, 0) 15%,
        rgba(255, 255, 255, 0) 55%,
        rgba(255, 255, 255, 0.3) 65%,
        rgba(255, 255, 255, 0.3) 75%,
        rgba(255, 255, 255, 0) 90%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(
        to bottom,
        transparent 90%,
        rgba(255, 255, 255, 0.3) 100%,
        rgba(255, 255, 255, 0.3) 100%
      );
    border-radius: 7px 7px 20px 20px;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
