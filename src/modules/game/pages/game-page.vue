<template>
  <GameWrapper :disable-u-i="false">
    <GameHeader
      :isSpecialLevel="false"
      :level="1"
      :totalUndo="0"
      :tubeHelpEnabled="true"
    />
    <Ball :colors="COLORS_BALLS[0]" :size :x="300" :y="300" />
    <div
      :style="{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
      }"
    >
      <Tube :size :capacity="4" :index="0" @click="handleClick" />
      <Tube :size :capacity="4" :index="1" @click="handleClick" />
      <Tube :size :capacity="4" :index="2" @click="handleClick" />
    </div>
    <!-- <Ball
      v-for="(color, index) of COLORS_BALLS"
      :key="index"
      :colors="color"
      :size="20"
      :x="40 * index"
      animate
      :y="300"
    /> -->
  </GameWrapper>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import GameHeader from '@/modules/game/components/game-header/game-header.vue';
import GameWrapper from '@/modules/game/components/game-wrapper/game-wrapper.vue';
import Ball from '@/modules/game/components/ball/ball.vue';
import COLORS_BALLS from '@/modules/common/helpers/colors';
import Tube from '@/modules/game/components/tube/tube.vue';
import type {
  TubeDistribution,
  Balls,
  GameProps,
  TestTubes,
} from '@/modules/common/interfaces/common';
import getInitialBalls from '@/modules/game/helpers/get-initial-balls';
import getInitialTestTubes from '@/modules/game/helpers/get-initial-test-tubes';
import getInitialTubeDistribution from '@/modules/game/helpers/get-initial-tube-distribution';

const level: GameProps & {
  levelCompleted: boolean;
  handleNextLevel: (isNextLevel: boolean) => void;
} = {
  capacity: 4,
  distribution: [2],
  isSpecialLevel: false,
  level: 1,
  size: 35,
  tubes: {
    '0': { balls: [{ value: 5 }] },
    '1': { balls: [{ value: 5 }, { value: 5 }, { value: 5 }] },
  },
  levelCompleted: false,
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

function handleClick(index: number): void {
  console.log('Clicked', index);
}
</script>
