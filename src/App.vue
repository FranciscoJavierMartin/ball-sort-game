<template>
  <AppWrapper>
    <div style="color: white">
      Ball sort puzzle
      <div>
        <ShareButton
          :data="dataShare"
          :useNativeOption="false"
          v-slot="{ onClick }"
        >
          <!-- <template #default="{ onClick }"> -->
          <button @click="onClick">Share</button>
          <!-- </template> -->
        </ShareButton>
      </div>
    </div>
  </AppWrapper>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import AppWrapper from '@/modules/common/components/app-wrapper/app-wrapper.vue';
import resizeScreen from '@/modules/common/helpers/resize-screen';
import type { ShareData } from '@/modules/share/interfaces/share-data';

const dataShare: ShareData = {
  title: 'Ball Sort Puzzle',
  text: 'Come and play Ball Sort Puzzle',
  url: window.location.href,
};

onMounted(() => {
  window.addEventListener('resize', resizeScreen);
  document.addEventListener('contextmenu', (e) => e.preventDefault(), false);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeScreen);
});
</script>

<style scoped></style>
