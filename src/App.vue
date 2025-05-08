<template>
  <AppWrapper>
    <div style="color: white">Ball sort puzzle</div>
    <ModalShareButtons
      :data="{
        text: 'Ball sort puzzle',
        url: 'https://example.com',
        title: 'Ball sort puzzle',
      }"
    />
  </AppWrapper>
</template>

<script setup lang="ts">
import AppWrapper from '@/modules/common/components/app-wrapper/app-wrapper.vue';
import ModalShareButtons from './modules/share/components/buttons/ModalShareButtons.vue';
</script>

<style scoped></style>
