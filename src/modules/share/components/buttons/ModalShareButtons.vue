<template>
  <div class="modal-share-buttons"></div>
</template>

<script setup lang="ts">
type TButtons = {
  icon: TypeIcon;
  label: string;
  action: string;
  url?: string;
};

const BUTTONS: TButtons[] = [
  {
    icon: 'copy',
    label: 'Copy',
    action: 'copy',
  },
  {
    icon: 'twitter',
    label: 'Twitter',
    action: 'twitter',
    url: 'https://twitter.com/intent/tweet?text=DATA_TEXT&url=DATA_URL',
  },
  {
    icon: 'facebook',
    label: 'Facebook',
    action: 'facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?u=DATA_URL&quote=DATA_TEXT',
  },
  {
    icon: 'linkedin',
    label: 'Linkedin',
    action: 'linkedin',
    url: 'https://www.linkedin.com/shareArticle?mini=true&url=DATA_URL&title=DATA_TITLE&summary=DATA_TEXT&source=LinkedIn',
  },
];
</script>

<style scoped>
.modal-share-buttons {
  .modal-share-button {
  }
}
</style>
