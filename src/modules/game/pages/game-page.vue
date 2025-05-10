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
import GameHeader from '@/modules/game/components/game-header/game-header.vue';
import GameWrapper from '@/modules/game/components/game-wrapper/game-wrapper.vue';
import Ball from '@/modules/game/components/ball/ball.vue';
import COLORS_BALLS from '@/modules/common/helpers/colors';
import Tube from '@/modules/game/components/tube/tube.vue';

const size = 40;

function handleClick(index: number): void {
  console.log('Clicked', index);
}
</script>
