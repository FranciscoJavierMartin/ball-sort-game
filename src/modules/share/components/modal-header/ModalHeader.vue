<template>
  <div class="modal-share-header">
    <h4>{{ label }}</h4>
    <button @click="$emit('closeModal')">
      <Icon type="close" fill="black" />
    </button>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/modules/common/components/icon/icon.vue';

withDefaults(defineProps<{ label?: string }>(), { label: 'Share...' });
defineEmits<{ closeModal: [boolean?] }>();
</script>

<style scoped>
.modal-share-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 25px;
    width: 25px;
  }
}
</style>
