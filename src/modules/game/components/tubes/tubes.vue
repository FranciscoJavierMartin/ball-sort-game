<template>
  <template v-for="(total, row) of distribution" :key="row">
    <div class="game-row-tubes">
      <Tube
        v-for="tube of getTubes(total, row)"
        :key="tube.index"
        v-bind="tube"
        :size
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

const props = defineProps<{
  distribution: number[];
  size: number;
  testTubes: TestTubes[];
}>();
const emits = defineEmits<{
  click: [index: number];
  handlePosition: [data: CoordinateTube];
}>();

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
