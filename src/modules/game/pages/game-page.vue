<template>
  <div>
    <GameHeader
      :isSpecialLevel="false"
      :level="1"
      :handleActions="handle"
      :totalUndo="0"
      :tubeHelpEnabled="true"
    />
    <div>Hello</div>
  </div>
</template>

<script setup lang="ts">
import GameHeader from '@/modules/game/components/game-header/game-header.vue';
import type { HeaderActions } from '@/modules/common/interfaces/common';

function handle(type: HeaderActions): void {}
</script>
