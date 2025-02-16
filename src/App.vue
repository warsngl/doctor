<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <NavBar />

    <main class="container mx-auto p-4">
      <RouterView />
    </main>
  </div>
</template>
