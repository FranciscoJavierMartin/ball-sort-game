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
import {
  type TButtons,
  BUTTONS,
} from '@/modules/share/components/modal-share-buttons/data';
import type { ShareData } from '@/modules/share/interfaces/share-data';
import { shareLinkWithSocialNetwork } from '@/modules/share/helpers/share-link';
import copyToClipboard from '@/modules/share/helpers/copy-to-clipboard';

const props = defineProps<{ data: ShareData }>();
const emits = defineEmits<{ close: [boolean] }>();

function handleClick(button: TButtons): void {
  if (button.action === 'copy') {
    copyToClipboard(`${props.data.text} ${props.data.url}`);
  } else {
    shareLinkWithSocialNetwork(props.data, button.url!);
  }

  emits('close', true);
}
</script>

<style scoped>
.modal-share-buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;

  .modal-share-button {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      height: 40px;
      margin-bottom: 5px;
      width: 40px;
    }

    span {
      font-size: 13px;
    }
  }
}
</style>
