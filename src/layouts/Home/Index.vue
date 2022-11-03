<script>
import { client } from "../../api/client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import NavigationBar from "./components/NavigationBar.vue";
export default {
  async mounted() {
 
  },
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    NavigationBar,
  },
  data: () => ({
    
  }),
};
</script>
<template>
  <NavigationBar />
  <div class="">
    <router-view></router-view>
  </div>
</template>
