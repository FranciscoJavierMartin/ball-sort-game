<template>
  <div class="modal-share-buttons">
    <div
      v-for="button of BUTTONS"
      class="modal-share-button"
      :key="button.icon"
    >
      <button @click="handleClick(button)">
        <Icon :type="button.icon" fill="black" />
      </button>
      <span>{{ button.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/modules/common/components/icon/icon.vue';
import type { TButtons } from '@/modules/share/components/buttons/data';

defineProps<{ data: ShareData }>();
const emits = defineEmits<{ close: [boolean] }>();

function handleClick(button: TButtons): void {
  if (button.action === 'copy') {
    copyToClipboard(`${data.text} ${data.url}`);
  } else {
  }

  emits('close', true);
}
</script>

<style scoped>
.modal-share-buttons {
  .modal-share-button {
  }
}
</style>
