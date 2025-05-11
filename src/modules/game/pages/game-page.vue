<template>
  <GameWrapper :disable-u-i="false">
    <GameHeader
      :isSpecialLevel="level.isSpecialLevel"
      :level="level.level"
      :totalUndo="2"
      :tubeHelpEnabled="tubeDistribution.isComplete"
    />
    <Tubes
      ref="tubes"
      :size="level.size"
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
import getPositionBalls from '../helpers/get-position-balls';

const level: GameProps & {
  levelCompleted: boolean;
  handleNextLevel: (isNextLevel: boolean) => void;
} = {
  capacity: 4,
  distribution: [5, 4],
  isSpecialLevel: false,
  level: 30,
  size: 35,
  tubes: {
    '0': {
      balls: [
        { value: 1, incognito: false },
        { value: 8, incognito: false },
        { value: 1, incognito: false },
        { value: 6, incognito: false },
      ],
    },
    '1': {
      balls: [
        { value: 4, incognito: false },
        { value: 8, incognito: false },
        { value: 1, incognito: false },
        { value: 4, incognito: false },
      ],
    },
    '2': {
      balls: [
        { value: 5, incognito: false },
        { value: 5, incognito: false },
        { value: 9, incognito: false },
        { value: 6, incognito: false },
      ],
    },
    '3': {
      balls: [
        { value: 1, incognito: false },
        { value: 9, incognito: false },
        { value: 9, incognito: false },
        { value: 8, incognito: false },
      ],
    },
    '4': {
      balls: [
        { value: 5, incognito: false },
        { value: 5, incognito: false },
        { value: 6, incognito: false },
        { value: 4, incognito: false },
      ],
    },
    '6': {
      balls: [
        { value: 4, incognito: false },
        { value: 7, incognito: false },
        { value: 6, incognito: false },
        { value: 8, incognito: false },
      ],
    },
    '8': {
      balls: [
        { value: 7, incognito: false },
        { value: 7, incognito: false },
        { value: 7, incognito: false },
        { value: 9, incognito: false },
      ],
    },
  },
  levelCompleted: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleNextLevel: (isNextLevel = false) => {},
};

const balls = ref<Balls[]>(getInitialBalls(level.tubes));
const testTubes = ref<TestTubes[]>(
  getInitialTestTubes(
    level.tubes,
    level.distribution,
    level.capacity,
    level.size,
  ),
);
const tubeDistribution = reactive<TubeDistribution>(
  getInitialTubeDistribution({
    balls: balls.value,
    capacity: level.capacity,
    distribution: level.distribution,
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
  () => [level.size, tubeDistribution],
  ([newSize, newTubeDistribution]) => {
    balls.value = getPositionBalls(
      balls.value,
      coordinateTubes.value,
      newSize as number,
    );
  },
  { deep: true, immediate: true },
);
</script>
