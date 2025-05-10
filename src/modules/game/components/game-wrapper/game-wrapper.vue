<template>
  <div class="game-wrapper">
    <div v-if="disableUI" class="game-wrapper-disabled" />
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ disableUI?: boolean }>(), { disableUI: false });
</script>

<style scoped>
.game-wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  .game-wrapper-disabled {
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 10;
  }
}
</style>
