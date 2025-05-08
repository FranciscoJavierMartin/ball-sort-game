<template>
  <div>
    <ModalHeader @close-modal="emits('closeModal', false)" />
    <ModalShareButtons v-bind="$props" />
  </div>
</template>

<script setup lang="ts">
import ModalShareButtons from '@/modules/share/components/buttons/ModalShareButtons.vue';
import ModalHeader from '@/modules/share/components/modal-header/ModalHeader.vue';
import type { ShareData } from '@/modules/share/interfaces/share-data';

defineProps<{ data: ShareData }>();
const emits = defineEmits<{ closeModal: [boolean] }>();
</script>
