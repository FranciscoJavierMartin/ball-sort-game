<template>
  <div :style></div>
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
  handlePosition: [data: Coordinate];
}>();

const style = computed<StyleValue>(() => {
  const width = Math.round(props.size + props.size * WIDTH_PADDING_PERCENTAGE);
  const borderWidth = Math.round(width - width * 0.95);
  const height = Math.round(
    props.size * props.capacity * props.size * HEIGHT_OFFSET_PERCENTAGE,
  );

  return {
    width: `${width}px`,
    borderWidth: `${borderWidth}px`,
    height: `${height}px`,
  };
});
</script>
