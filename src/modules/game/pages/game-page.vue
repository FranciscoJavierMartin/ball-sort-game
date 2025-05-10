<template>
  <GameWrapper :disable-u-i="false">
    <GameHeader
      :isSpecialLevel="false"
      :level="1"
      :totalUndo="0"
      :tubeHelpEnabled="true"
    />

    <Ball
      v-for="(color, index) of COLORS_BALLS"
      :key="index"
      :colors="[color, lightenDarkenColor(color, 100)]"
      :size="20"
      :x="40 * index"
      animate
      :y="300"
    />
  </GameWrapper>
</template>

<script setup lang="ts">
import GameHeader from '@/modules/game/components/game-header/game-header.vue';
import GameWrapper from '@/modules/game/components/game-wrapper/game-wrapper.vue';
import Ball from '@/modules/game/components/ball/ball.vue';
import COLORS_BALLS from '@/modules/common/helpers/colors';
import { lightenDarkenColor } from '@/modules/common/helpers/miscellaneous';
</script>
