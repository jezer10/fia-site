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
      :class="isMenuOpen ? 'md:pl-82' : ''"
    >
      <div class="h-full w-full px-4 pt-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
