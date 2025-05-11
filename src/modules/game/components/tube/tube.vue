<template>
  <button
    ref="tube-element"
    class="tube"
    :style
    :aria-label="`Tube ${index + 1}`"
    @click="handleClick"
  >
    <ConfettiExplosion
      v-if="showConfetti && isComplete"
      :duration="3000"
      :particleCount="150"
      :particleSize="10"
      :colors="['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']"
    />
  </button>
</template>

<script setup lang="ts">
import { computed, useTemplateRef, type StyleValue } from 'vue';
import ConfettiExplosion from 'vue-confetti-explosion';
import {
  HEIGHT_OFFSET_PERCENTAGE,
  WIDTH_PADDING_PERCENTAGE,
} from '@/modules/common/helpers/constants';
import type { CoordinateTube } from '@/modules/common/interfaces/common';

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
  handlePosition: [data: CoordinateTube];
}>();

const tubeElement = useTemplateRef<HTMLButtonElement>('tube-element');

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

const coordinates = computed<CoordinateTube>(() => {
  const x = tubeElement.value?.offsetLeft || 0;
  const y = tubeElement.value?.offsetTop || 0;

  return { x, y, capacity: props.capacity };
});

function handleClick(): void {
  emits('click', props.index);
}

defineExpose({ coordinates });
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
