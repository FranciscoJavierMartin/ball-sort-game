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
import ModalShareButtons from '@/modules/share/components/modal-share-buttons/modal-share-buttons.vue';
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

<style>
#overlay-share {
  animation: fadeIn 500ms ease both;
  background: rgb(0 0 0 / 85%);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;

  .modal-share-wrapper {
    animation: fadeIn 1000ms ease both;
    background-color: white;
    border-radius: 15px 15px 0 0;
    bottom: 0;
    box-shadow:
      rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px;
    padding: 20px;
    position: absolute;
    width: 100%;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
