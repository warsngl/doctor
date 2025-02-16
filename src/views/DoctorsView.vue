<script setup lang="ts">
import { ref } from 'vue';
import { Doctor } from '@/types';
import { useDoctorsStore } from '../store/index.js'
import DoctorTable from '@/components/DoctorTable.vue';
import DoctorForm from '@/components/DoctorForm.vue';

const store = useDoctorsStore();

const showModal = ref(false);
const selectedDoctor = ref<Doctor | null>(null);

const openModal = (doctor: Doctor | null = null) => {
  selectedDoctor.value = doctor;
  showModal.value = true;
};

const saveDoctor = (doctor: Doctor) => {
  store.saveDoctor(doctor)
  showModal.value = false;
};
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Врачи</h1>
      <button @click="openModal()" class="bg-blue-500 hover:bg-blue-700 form__button">
        Добавить врача
      </button>
    </div>

    <DoctorTable :doctors="store.doctors" @edit="openModal" />

    <DoctorForm v-if="showModal" :doctor="selectedDoctor" @save="saveDoctor" @close="showModal = false" />
  </div>
</template>