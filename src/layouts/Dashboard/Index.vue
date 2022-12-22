<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import { PencilIcon } from "@heroicons/vue/24/solid";
export default {
  data: () => ({
    isMenuOpen: false,
  }),
  components: { Header, Sidebar, PencilIcon },
};
</script>

<template>
  <div class="w-screen h-screen">
    <Header @openMenu="isMenuOpen = !isMenuOpen" />
    <Sidebar :isMenuOpen="isMenuOpen" />
    <div
      class="contenido w-full h-full pt-24 transition-all"
      :class="isMenuOpen ? 'pl-76' : ''"
    >
      <div class="h-full w-full  p-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
