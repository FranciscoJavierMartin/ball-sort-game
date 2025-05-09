<template>
  <slot :onClick />
  <ShareModal v-if="isModalVisible" :data @closeModal="onCloseModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ShareData } from '@/modules/share/interfaces/share-data';
import ShareModal from '@/modules/share/components/share-modal/share-modal.vue';
import { shareLink } from '@/modules/share/helpers/share-link';

const isModalVisible = ref<boolean>(false);

const props = withDefaults(
  defineProps<{ data: ShareData; useNativeOption?: boolean }>(),
  {
    useNativeOption: true,
  },
);

const onClick = () => {
  if ('share' in navigator && props.useNativeOption) {
    shareLink(props.data);
  } else {
    isModalVisible.value = true;
  }
};

function onCloseModal(isShare: boolean = false): void {
  if (isShare) {
  }

  isModalVisible.value = false;
}
</script>
