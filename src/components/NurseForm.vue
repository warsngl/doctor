<script setup lang="ts">
import { ref, watch } from 'vue';
import { Nurse } from '@/types';

const props = defineProps<{
  nurse?: Nurse | null;
}>();

const emit = defineEmits(['save', 'close']);

const form = ref({
  id: props.nurse?.id || null,
  name: props.nurse?.name || '',
  department: props.nurse?.department || 'cardiology'
});

watch(() => props.nurse, (newNurse) => {
  if (newNurse) {
    form.value = {
      id: newNurse.id,
      name: newNurse.name,
      department: newNurse.department
    };
  }
});

const save = () => {
  emit('save', form.value);
};

const close = () => {
  emit('close');
};
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <h2 class="text-xl font-bold mb-4">
        {{ form.id ? 'Редактировать медсестру' : 'Добавить медсестру' }}
      </h2>
      
      <form @submit.prevent="save">
        <div class="mb-4">
          <label class="form__label" for="name">
            ФИО
          </label>
          <input
            v-model="form.name"
            id="name"
            type="text"
            required
            class="form__field"
          >
        </div>

        <div class="mb-4">
          <label class="form__label" for="department">
            Отделение
          </label>
          <select
            v-model="form.department"
            id="department"
            required
            class="form__field"
          >
            <option value="cardiology">Кардиологическое</option>
            <option value="surgery">Хирургическое</option>
          </select>
        </div>

        <div class="flex justify-end space-x-2">
          <button
            type="button"
            @click="close"
            class="bg-gray-500 hover:bg-gray-700 form__button"
          >
            Отмена
          </button>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 form__button"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>

</style>