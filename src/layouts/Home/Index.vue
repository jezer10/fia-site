<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import NavigationBar from "./components/NavigationBar.vue";
import { usePeriodStore } from "@/store/period";
export default {
  setup() {
    const periodStore = usePeriodStore();
    return { periodStore };
  },
  async mounted() {
    this.periodStore.setSemesters();
    this.periodStore.setCycles(1);

  },
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    NavigationBar,
  },
  data: () => ({}),
};
</script>
<template>
  <NavigationBar />
  <div class="">
    <router-view></router-view>
  </div>
</template>
