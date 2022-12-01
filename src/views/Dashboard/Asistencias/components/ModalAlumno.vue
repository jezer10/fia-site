<template>
  <base-modal @close="closedModal" :show="show" title="Registrar Alumno">
    <div class="grid gap-x-8 gap-y-4 grid-cols-2 px-4">
      <div>
        <label for="" class="form-label">CÓDIGO: </label>
        <input
          type="text"
          v-model="student.code"
          placeholder="Ingrese Código Estudiante"
          class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full"
        />
      </div>
      <div>
        <label for="" class="form-label">NOMBRE:</label>
        <input
          v-model="student.names"
          type="text"
          placeholder="Ingrese Nombre"
          class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full"
        />
      </div>
    </div>

    <div class="flex justify-end gap-2 p-4">
      <button
        @click="closedModal"
        class="text-gray-600 text-sm shadow px-6 py-2 rounded-lg font-medium"
      >
        Cancelar
      </button>
      <button
        @click="createStudent"
        class="bg-primary text-white text-sm shadow px-6 py-2 rounded-lg font-medium"
      >
        Guardar
      </button>
    </div>
  </base-modal>
</template>

<script>
import { client } from "@/api/client";

import {
  Dialog,
  DialogBackdrop,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
export default {
  components: {
    Dialog,
    DialogBackdrop,
    DialogTitle,
    DialogDescription,
    DialogOverlay,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
  },
  data: () => ({
    student: {
      code: "",
      names: "",
    },
  }),
  emits: ["close"],

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    cycle: {},
  },
  methods: {
    closedModal() {
      this.$emit("close");
    },
    async createStudent() {
      const body = {
        ...this.student,
        idCycle: this.cycle,
      };
      const { data, status } = await client.post("/students/create", body);
      console.log(data);
      if (status !== 201) {
        this.$toast.error("Ocurrio un error durante el registro");
        this.closeModal();
      }

      this.$toast.success("Estudiante creado correctamente");
      this.closeModal();
    },
  },
};
</script>
