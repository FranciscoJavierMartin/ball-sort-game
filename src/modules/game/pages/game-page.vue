<template>
  <GameWrapper :disable-u-i="false">
    <GameHeader
      :isSpecialLevel="false"
      :level="1"
      :totalUndo="0"
      :tubeHelpEnabled="true"
    />
    <div>Hello</div>
  </GameWrapper>
</template>

<script setup lang="ts">
import GameHeader from '@/modules/game/components/game-header/game-header.vue';
import GameWrapper from '@/modules/game/components/game-wrapper/game-wrapper.vue';
</script>
