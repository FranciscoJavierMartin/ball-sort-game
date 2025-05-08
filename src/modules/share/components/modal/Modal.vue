<template>
  <Teleport :to="`#${ID_ELEMENT}`">
    <!-- TODO: Focus trap -->
    <div class="modal-share-wrapper">
      <ModalHeader @close-modal="emits('closeModal', false)" />
      <ModalShareButtons v-bind="$props" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { $ } from '@/modules/common/helpers/miscellaneous';
import ModalShareButtons from '@/modules/share/components/buttons/ModalShareButtons.vue';
import ModalHeader from '@/modules/share/components/modal-header/ModalHeader.vue';
import type { ShareData } from '@/modules/share/interfaces/share-data';
import { onBeforeMount, onUnmounted, ref } from 'vue';

const ID_ELEMENT = 'overlay-share';
const element = ref<HTMLDivElement | null>(null);
defineProps<{ data: ShareData }>();
const emits = defineEmits<{ closeModal: [boolean?] }>();

onBeforeMount(() => {
  if (!element.value) {
    if (!$(`#${ID_ELEMENT}`)) {
      element.value = document.createElement('div');
      element.value.id = ID_ELEMENT;
      $('.screen')?.appendChild(element.value);
    } else {
      element.value = $(`#${ID_ELEMENT}`) as HTMLDivElement;
    }
  }
});

onUnmounted(() => {
  if (element.value && $('.screen')) {
    $('.screen')?.removeChild(element.value);
  }
});
</script>

<style scoped>
.modal-share-wrapper {
}
</style>
