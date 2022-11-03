<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  data: () => ({
    routes: [
      {
        name: "Gestión",
        path: "/home",
      },
      {
        name: "Formación Integral",
        path: "/home",
      },
      {
        name: "I + D + I",
        path: "/home",
      },
      {
        name: "Vinculación con el Medio",
        path: "/home",
      },
      {
        name: "Desarrollo Espiritual",
        path: "/home",
      },
    ],
  }),
};
</script>
<template>
  <div class="bg-white backdrop-blur-sm fixed h-20 top-0 inset-x-0 z-10">
    <div class="relative h-full">
      <div class="absolute h-full w-80">
        <div class="relative flex items-center h-full">
          <div
            class="w-80 bg-secondary h-full rounded-tr-full absolute left-0"
          ></div>
          <div
            class="w-76 bg-white h-full rounded-tr-full absolute left-0"
          ></div>
          <div
            class="w-72 bg-secondary h-full rounded-tr-full absolute left-0"
          ></div>
          <img
            src="@/assets/images/circuito3.svg"
            class="h-full absolute left-0"
          />
          <img
            src="@/assets/icons/logo-upeu1.png"
            class="h-10 absolute left-24"
          />
        </div>
      </div>
      <div class="flex items-center h-full absolute right-4 gap-4">
        <router-link v-for="r in routes" :to="{ path: r.path }" class="group">
          <span class="text-xs text-primary font-bold">{{ r.name }}</span>
          <div
            class="h-1 bg-secondary rounded-full w-0 group-hover:w-1/2 transition-all duration-1000"
          ></div>
        </router-link>
        <div
          class="text-white bg-primary rounded-lg px-4 py-1 text-xs font-medium"
        >
          Ciclo
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <router-view></router-view>
  </div>
</template>
