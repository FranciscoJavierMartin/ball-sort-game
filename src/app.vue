<template>
  <AppWrapper>
    <RouterView />
  </AppWrapper>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import AppWrapper from '@/modules/common/components/app-wrapper/app-wrapper.vue';
import resizeScreen from '@/modules/common/helpers/resize-screen';

onMounted(() => {
  window.addEventListener('resize', resizeScreen);
  document.addEventListener('contextmenu', (e) => e.preventDefault(), false);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeScreen);
});
</script>
