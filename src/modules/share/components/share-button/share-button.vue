<template>
  <slot :onClick="onClick" />
  <ShareModal v-if="isModalVisible" :data @close="onCloseModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ShareData } from '@/modules/share/interfaces/share-data';
import ShareModal from '@/modules/share/components/modal/Modal.vue';

const isModalVisible = ref<boolean>(false);

const props = withDefaults(
  defineProps<{ data: ShareData; useNativeOption?: boolean }>(),
  {
    useNativeOption: true,
  },
);

function onClick() {
  if ('share' in navigator && props.useNativeOption) {
  } else {
    isModalVisible.value = true;
  }
}

function onCloseModal(isShare: boolean = false): void {
  if (isShare) {
  }

  isModalVisible.value = false;
}
</script>
