<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between">
        <router-link to="/" class="text-white text-xl font-bold">Медперсонал</router-link>
        <div class="space-x-4">
          <router-link 
            to="/doctors" 
            class="text-gray-300 hover:text-white"
            active-class="text-white font-bold"
          >
            Врачи
          </router-link>
          <router-link 
            to="/nurses" 
            class="text-gray-300 hover:text-white"
            active-class="text-white font-bold"
          >
            Медсестры
          </router-link>
        </div>
      </div>
    </nav>
  </template>