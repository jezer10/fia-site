<template>
  <div class="grid gap-4">
    <div class="text-gray-700 flex flex-col">
      <span class="font-bold text-4xl">Asistencias - Activate Sistemas</span>
      <span class="font-light">Registrar asistencia a estudiantes</span>
    </div>
    <registrar-asistencia
      @closeRegister="this.isRegisterOpen = false"
      v-if="isRegisterOpen"
    />

    <lista-asistencias @openRegister="this.isRegisterOpen = true" v-else />
  </div>
</template>

<script>
import ListaAsistencias from "./components/ListaAsistencias.vue";
import RegistrarAsistencia from "./components/RegistrarAsistencia.vue";
// import { client } from '@/api/client';

export default {
  components: {
    ListaAsistencias,
    RegistrarAsistencia,
  },
  data: () => ({
    isRegisterOpen: false,
  }),
  methods: {
    
  }
};
</script>

<style></style>
