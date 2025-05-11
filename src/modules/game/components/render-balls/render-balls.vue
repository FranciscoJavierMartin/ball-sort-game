<template>
  <Ball v-for="ball of filteredBalls" :key="ball.index" v-bind="ball" :size />
</template>

<script setup lang="ts">
import type { Balls } from '@/modules/common/interfaces/common';
import Ball from '@/modules/game/components/ball/ball.vue';
import { computed } from 'vue';

const props = defineProps<{ balls: Balls[]; size: number }>();

const filteredBalls = computed<Balls[]>(() => {
  return props.balls.filter((ball) => ball);
});
</script>
