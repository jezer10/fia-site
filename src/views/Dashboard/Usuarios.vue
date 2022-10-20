<template>
  <base-modal
    @closed="closeNewUserModal"
    :show="isNewUserModalOpen"
  ></base-modal>
  <div class="rounded-lg bg-gray-200">
    <div class="flex justify-between items-center p-4">
      <p class="flex flex-col">
        <span class="font-bold text-2xl text-gray-600">Usuarios</span>
        <span class="text-sm text-gray-400">Administradores y docentes</span>
      </p>
      <button
        type="button"
        @click="openNewUserModal"
        class="rounded-md bg-secondary text-sm font-medium text-white px-4 py-2 flex gap-2 items-centerd items-center"
      >
        <plus-icon class="w-4 h-4" />
        <span> Nuevo Usuario </span>
      </button>
    </div>
    <div class="px-4 pb-4 grid gap-4">
      <div
        class="bg-primary rounded-lg shadow p-4 text-white flex items-center gap-4"
        v-for="i in 3"
      >
        <div class="w-12 h-12 bg-white rounded-full"></div>
        <div class="flex flex-col">
          <span class="text-xs font-extralight">Nombres y Apellidos</span>
          <span class="font-bold text-sm">Diana Lidia Sanchéz Torpoco</span>
        </div>
        <div class="flex flex-col">
          <span class="text-xs font-extralight">Rol</span>
          <span class="font-bold text-sm">Docente</span>
        </div>
        <div class="flex flex-col">
          <span class="text-xs font-extralight">Area</span>
          <span class="font-bold text-sm">Investigación</span>
        </div>
        <div class="flex flex-col">
          <span class="text-xs font-extralight">EP</span>
          <span class="font-bold text-sm">Ingeniería de Sistemas</span>
        </div>
        <div class="flex flex-col">
          <span class="text-xs font-extralight">ID</span>
          <span class="font-bold text-sm">Google</span>
        </div>
        <div>
          <select
            class="px-2 py-1 bg-white rounded-lg shadow text-black"
            v-model="selectedValue"
          >
            <option value="">Opciones</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PlusIcon } from "@heroicons/vue/24/solid";
import {
  Dialog,
  DialogBackdrop,
  DialogDescription,
  DialogOverlay,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
export default {
  components: {
    Dialog,
    DialogBackdrop,
    DialogDescription,
    DialogOverlay,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    PlusIcon,
  },
  data: () => ({
    isNewUserModalOpen: false,
    selectedValue: "",
  }),
  methods: {
    openNewUserModal() {
      this.isNewUserModalOpen = true;
    },
    closeNewUserModal() {
      this.isNewUserModalOpen = false;
    },
  },
};
</script>
