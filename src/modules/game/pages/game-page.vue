<template>
  <Game v-bind="level" />
</template>

<script setup lang="ts">
import Game from '@/modules/game/components/game/game.vue';
import type { GameProps } from '@/modules/common/interfaces/common';

const level: GameProps & {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleNextLevel: (isNextLevel = false) => {},
};
</script>
