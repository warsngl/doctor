<script setup lang="ts">
import { Nurse } from '@/types';
import { useNursesStore } from '../store/index.js'
const store = useNursesStore();
defineProps<{
  nurses: Nurse[];
}>();

const deleteNurse = (id: number) => {
  store.deleteNurse(id)
};
</script>

<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th>ФИО</th>
        <th>Отделение</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="nurse in nurses" :key="nurse.id">
        <td>{{ nurse.name }}</td>
        <td>{{ nurse.department === 'cardiology' ? 'Кардиологическое' : 'Хирургическое' }}</td>
        <td>
          <button @click="$emit('edit', nurse)" class="mr-2">✏</button>
          <button @click="deleteNurse(nurse.id)">🗑</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
