<template>
  <template v-for="(total, row) of distribution" :key="row">
    <div class="game-row-tubes">
      <Tube
        v-for="tube of getTubes(total, row)"
        :key="tube.index"
        ref="tubes"
        v-bind="tube"
        :size
        @click="(index) => $emit('click', index)"
      />
    </div>
  </template>
</template>

<script setup lang="ts">
import type {
  CoordinateTube,
  TestTubes,
} from '@/modules/common/interfaces/common';
import Tube from '@/modules/game/components/tube/tube.vue';
import { computed, useTemplateRef } from 'vue';

const props = defineProps<{
  distribution: number[];
  size: number;
  testTubes: TestTubes[];
}>();
const emits = defineEmits<{
  click: [index: number];
  handlePosition: [data: CoordinateTube];
}>();

const tubeRefs = useTemplateRef('tubes');

const coordinateTubes = computed<CoordinateTube[]>(
  () =>
    tubeRefs.value
      ?.map((tube) => tube?.coordinates)
      .filter((tube) => tube !== undefined) ?? [],
);

defineExpose({ coordinateTubes });

function getTubes(total: number, row: number) {
  return new Array(total).fill(null).map((_, i) => {
    const indexBase = props.distribution
      .slice(0, row)
      .reduce((acc, curr) => acc + curr, 0);

    const { index, isComplete, showConfetti, capacity } =
      props.testTubes[indexBase + i];

    return {
      index,
      isComplete,
      showConfetti,
      capacity,
    };
  });
}
</script>

<style scoped>
.game-row-tubes {
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  &:not(:first-of-type) {
    margin-top: calc(v-bind(size) * 1.5px);
  }
}
</style>
