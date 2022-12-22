<template>
  <div
    class="sidebar h-screen p-4 w-80 fixed z-10 inset-y-0 transition-all"
    :class="[isMenuOpen ? 'left-0' : '-left-80']"
  >
    <div class="h-full bg-primary rounded-2xl shadow text-white relative">
      <div class="flex flex-col items-center justify-center py-8 gap-2">
        <img
          src="@/assets/images/profile.jpg"
          class="w-24 h-24 object-cover rounded-full"
          alt=""
        />
        <div class="flex flex-col text-center">
          <span class="text-xs font-extralight">Bienvenide,</span>
          <span class="font-bold">John Suxe Soto</span>
        </div>
      </div>
      <div>
        <ul class="flex flex-col">
          <li v-for="m in modules">
            <router-link
              v-slot="{ isExactActive }"
              class="flex items-center gap-4"
              :to="m.route"
            >
              <div
                class="w-1 rounded-r h-8"
                :class="isExactActive ? 'bg-secondary' : ''"
              ></div>
              <div
                class="flex items-center gap-2"
                :class="isExactActive ? 'text-secondary' : ''"
              >
                <user-icon class="w-4 h-4" />
                <span class="text-sm">{{ m.name }}</span>
              </div>
            </router-link>
          </li>
          <li>
            <button class="flex items-center gap-4" @click="logout()">
              <div class="w-1 rounded-r h-8"></div>
              <div class="flex items-center gap-2">
                <user-icon class="w-4 h-4" />
                <span class="text-sm">Salir</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div class="absolute bottom-4 text-[8px] text-center inset-x-0 font-thin">
        Design by G2 Crew - v1.0
      </div>
      
    </div>
  </div>
</template>

<script>
import {
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/vue/24/solid";
export default {
  props: ["isMenuOpen"],
  data: () => ({
    modules: [
      { name: "Inicio", route: "/" },
      { name: "Usuarios", route: "/usuarios" },
      { name: "Eventos", route: "/eventos" },
      { name: "Publicaciones", route: "/publicaciones" },
      { name: "Asistencias", route: "/asistencias" },
      { name: "Configuracion", route: "/configuracion" },
    ],
  }),
  components: { UserIcon, ArrowLeftOnRectangleIcon },
  methods: {
    logout() {
      this.$router.push("/login")
    },
  },
};
</script>
