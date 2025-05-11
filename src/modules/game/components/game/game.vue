<template>
  <GameWrapper :disable-u-i="false">
    <GameHeader
      :isSpecialLevel
      :level
      :totalUndo="2"
      :tubeHelpEnabled="tubeDistribution.isComplete"
    />
    <RenderBalls :balls :size />
    <Tubes
      ref="tubes"
      :size
      :distribution="tubeDistribution.distribution"
      :test-tubes
      @click="handleClick"
    />
  </GameWrapper>
</template>

<script setup lang="ts">
import { computed, reactive, ref, useTemplateRef, watch } from 'vue';
import GameHeader from '@/modules/game/components/game-header/game-header.vue';
import GameWrapper from '@/modules/game/components/game-wrapper/game-wrapper.vue';
import type {
  TubeDistribution,
  Balls,
  GameProps,
  TestTubes,
  CoordinateTube,
} from '@/modules/common/interfaces/common';
import getInitialBalls from '@/modules/game/helpers/get-initial-balls';
import getInitialTestTubes from '@/modules/game/helpers/get-initial-test-tubes';
import getInitialTubeDistribution from '@/modules/game/helpers/get-initial-tube-distribution';
import Tubes from '@/modules/game/components/tubes/tubes.vue';
import updatePositionBalls from '@/modules/game/helpers/update-position-balls';
import RenderBalls from '@/modules/game/components/render-balls/render-balls.vue';

const props = defineProps<
  GameProps & { handleNextLevel: (isNextLevel: boolean) => void }
>();

const balls = ref<Balls[]>(getInitialBalls(props.tubes));
const testTubes = ref<TestTubes[]>(
  getInitialTestTubes(
    props.tubes,
    props.distribution,
    props.capacity,
    props.size,
  ),
);
const tubeDistribution = reactive<TubeDistribution>(
  getInitialTubeDistribution({
    balls: balls.value,
    capacity: props.capacity,
    distribution: props.distribution,
    testTubes: testTubes.value,
  }),
);

const tubesRef = useTemplateRef('tubes');
const coordinateTubes = computed<CoordinateTube[]>(
  () => tubesRef.value?.coordinateTubes ?? [],
);

function handleClick(index: number): void {
  console.log('Clicked', index);
}

watch(
  () => [props.size, tubeDistribution, coordinateTubes.value],
  ([newSize]) => {
    console.log('Inside watch');
    balls.value = updatePositionBalls(
      balls.value,
      coordinateTubes.value,
      newSize as number,
    );
  },
  { deep: true, immediate: true },
);
</script>
