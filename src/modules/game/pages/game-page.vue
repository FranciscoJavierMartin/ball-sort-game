<template>
  <GameWrapper :disable-u-i="false">
    <GameHeader
      :isSpecialLevel="false"
      :level="1"
      :totalUndo="0"
      :tubeHelpEnabled="true"
    />
    <Ball :colors="COLORS_BALLS[0]" :size="50" :x="300" :y="300" />
    <Tube :size="40" :capacity="4" :index="0" />
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
</script>
