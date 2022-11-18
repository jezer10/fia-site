<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-lg transform overflow-hidden text-left align-middle shadow-xl transition-all"
            >
              <div
                class="bg-primary text-white font-medium px-4 py-2 rounded-t-lg"
              >
                <DialogTitle as="h3" class="text-lg">
                  REGISTRAR ESTUDIANTE
                </DialogTitle>
              </div>
              <div class="bg-white rounded-b-lg">
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
                    @click="closeModal"
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
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
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
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    cycle: {},
  },
  methods: {
    closeModal() {
      this.$emit("closed");
    },
    async createStudent() {
      const body = {
        ...this.student,
        idCycle: this.cycle,
      };
      console.log(body);
      const response = await client.post("/students/create", body);
      console.log(response);
    },
  },
};
</script>
