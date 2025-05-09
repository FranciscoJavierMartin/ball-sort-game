<template>
  <header class="game-header">
    <a :to="{ name: ROUTES.HOME.name }" title="Home" class="button blue">
      <Icon type="home" />
    </a>
    <button class="button blue" title="Restart" @click="$emit('restart')">
      <Icon type="restart" />
    </button>
    <div class="game-header-level">
      <template v-if="!isSpecialLevel">
        <div>LEVEL</div>
        <div>{{ level }}</div>
      </template>
      <template v-else> Special level </template>
    </div>
    <button
      class="button blue"
      title="Undo"
      :disabled="!totalUndo"
      @click="$emit('undo')"
    >
      <Icon type="undo" />
    </button>
    <button class="button blue" title="Tube" @click="$emit('tube')">
      <span>+</span>
      <Icon type="tube" />
    </button>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { HeaderActions } from '@/modules/common/interfaces/common';
import { ROUTES } from '@/router/routes';
import Icon from '@/modules/common/components/icon/icon.vue';

defineProps<{
  level: number;
  isSpecialLevel: boolean;
  totalUndo: number;
  tubeHelpEnabled: boolean;
  handleActions: (type: HeaderActions) => void;
}>();
defineEmits<{
  restart: void;
  undo: void;
  tube: void;
}>();
</script>

<style scoped>
.game-header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px;

  .button {
    border-radius: 12px;
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

    :deep(.icon-wrapper) {
      width: 62%;
    }

    span {
      color: white;
      font-weight: bold;
      font-size: 15px;
      margin-right: -5px;
    }
  }

  .game-header-level {
    align-items: center;
    background-color: #303030;
    border-radius: 10px;
    color: #6858c3;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    height: 45px;
    justify-content: center;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    width: 30%;
    box-shadow:
      rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    div:first-child {
      color: #6f6f6d;
      font-size: 13px;
    }

    div:nth-child(2) {
      color: white;
      font-size: 19px;
    }
  }

  :deep(svg) {
    filter: drop-shadow(0 2px 1px black);
  }
}
</style>
