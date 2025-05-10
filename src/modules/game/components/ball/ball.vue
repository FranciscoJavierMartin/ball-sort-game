<template>
  <div
    class="ball"
    :class="{
      bounce,
      incognito,
    }"
    :style="{
      left: `${x}px`,
      top: `${y}px`,
      width: `${size}px`,
      height: `${size}px`,
      transition: animate ? `all ${SPEED_ANIMATION}ms ease` : 'unset',
      '--ball-primary': incognito ? INCOGNITO_COLOR : colors[1],
      '--ball-secondary': incognito ? INCOGNITO_COLOR : colors[0],
    }"
  >
    <template v-if="incognito">?</template>
  </div>
</template>

<script setup lang="ts">
import { SPEED_ANIMATION } from '@/modules/common/helpers/constants';
import { INCOGNITO_COLOR } from '@/modules/common/helpers/colors';

withDefaults(
  defineProps<{
    colors: [string, string];
    size?: number;
    animate?: boolean;
    bounce?: boolean;
    incognito?: boolean;
    x?: number;
    y?: number;
  }>(),
  {
    size: 0,
    animate: false,
    bounce: false,
    incognito: false,
    x: 0,
    y: 0,
  },
);
</script>

<style scoped>
.ball {
  background: radial-gradient(
    circle at 60% 60%,
    var(--ball-primary) 10%,
    var(--ball-secondary) 100%
  );
  border-radius: 50%;
  position: absolute;

  &::after {
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8) 14%,
      rgba(255, 255, 255, 0) 24%
    );
    border-radius: 50%;
    content: '';
    filter: blur(2px);
    height: 100%;
    left: 10%;
    position: absolute;
    top: 5%;
    transform: translateX(-25%) translateY(-25%) skewX(-20deg);
    width: 100%;
  }

  &.bounce {
    animation: bounce 350ms both;
  }

  &.incognito {
    align-items: center;
    border: 2px solid silver;
    color: white;
    display: flex;
    font-size: 15px;
    font-weight: bold;
    justify-content: center;
    text-shadow: 1px 1px 1px #7e7e7e;

    &::after {
      content: none;
    }
  }
}
</style>
