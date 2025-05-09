<template>
  <div class="icon-wrapper" :class="`icon-${type}`">
    <svg :view-box="properties[type].viewBox">
      <path v-for="(d, key) of properties[type].path" :d :key :fill />
    </svg>
  </div>
</template>

<script setup lang="ts">
import {
  properties,
  type TypeIcon,
} from '@/modules/common/components/icon/data';

withDefaults(defineProps<{ type: TypeIcon; fill?: string }>(), {
  fill: 'white',
});
</script>
