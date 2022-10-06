<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import { PencilIcon } from "@heroicons/vue/24/solid";
export default {
  data: () => ({
    isMenuOpen: true,
  }),
  components: { Header, Sidebar, PencilIcon },
};
</script>

<template>
  <div class="w-screen h-screen">
    <button
      @click="isMenuOpen = !isMenuOpen"
      class="fixed bottom-2 right-2 shadow rounded-full bg-secondary w-12 h-12 p-4 text-white"
    >
      <PencilIcon />
    </button>
    <Header />
    <Sidebar :isMenuOpen="isMenuOpen" />
    <div
      class="contenido w-full h-full pt-24 transition-all"
      :class="isMenuOpen ? 'pl-82' : 'pl-6'"
    >
      <div class="h-full w-full py-8 pr-6">
        <div class="h-full grid grid-rows-2 grid-cols-2 gap-8">
          <div class="bg-slate-100 rounded-lg shadow"></div>
          <div class="bg-primary-light rounded-lg shadow"></div>
          <div class="grid grid-rows-2 grid-cols-2 gap-8">
            <div class="bg-indigo-600 rounded-lg shadow"></div>
            <div class="bg-indigo-600 rounded-lg shadow"></div>
            <div class="bg-indigo-600 rounded-lg shadow"></div>
            <div class="bg-indigo-600 rounded-lg shadow"></div>
          </div>

          <div class="bg-slate-100 rounded-lg shadow"></div>
        </div>
      </div>
    </div>
  </div>
</template>
