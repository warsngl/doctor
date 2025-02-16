<script setup lang="ts">
import { ref } from 'vue';
import { Nurse } from '@/types';
import { useNursesStore } from '../store/index.js'
import NurseTable from '@/components/NurseTable.vue';
import NurseForm from '@/components/NurseForm.vue';

const store = useNursesStore();

const showModal = ref(false);
const selectedNurse = ref<Nurse | null>(null);

const openModal = (nurse: Nurse | null = null) => {
  selectedNurse.value = nurse;
  showModal.value = true;
};

const saveNurse = (nurse: Nurse) => {
  store.saveNurse(nurse)
  showModal.value = false;
};
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Медсестры</h1>
      <button @click="openModal()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Добавить медсестру
      </button>
    </div>

    <NurseTable :nurses="store.nurses" @edit="openModal" />

    <NurseForm v-if="showModal" :nurse="selectedNurse" @save="saveNurse" @close="showModal = false" />
  </div>
</template>