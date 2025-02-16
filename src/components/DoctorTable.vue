<script setup lang="ts">
import { Doctor } from '@/types';
import { useDoctorsStore } from '../store/index.js'
const store = useDoctorsStore();

defineProps<{
  doctors: Doctor[];
}>();


const deleteDoctor = (id: number) => {
  store.deleteDoctor(id) 
};
</script>

<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th>ФИО</th>
        <th>Отделение</th>
        <th>Заведующий</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="doctor in doctors" :key="doctor.id">
        <td>{{ doctor.name }}</td>
        <td>{{ doctor.department === 'cardiology' ? 'Кардиологическое' : 'Хирургическое' }}</td>
        <td>{{ doctor.isHead ? 'Да' : 'Нет' }}</td>
        <td>
          <button @click="$emit('edit', doctor)" class="mr-2">✏</button>
          <button @click="deleteDoctor(doctor.id)">🗑</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
