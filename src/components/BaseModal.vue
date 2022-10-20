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
                  Payment successful
                </DialogTitle>
              </div>
              <div class="bg-white rounded-b-lg">
                <div class="grid gap-x-8 gap-y-4 grid-cols-2 px-4">
                  <div v-for="i in 6">
                    <label for="" class="form-label">Nombre</label>
                    <input
                      type="text"
                      placeholder="Ingrese Nombre"
                      class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full"
                    />
                  </div>
                  <div v-for="i in 3">
                    <label for="" class="form-label">Nombre</label>
                    <select class="w-full bg-white shadow px-4 py-2 rounded-lg">
                      <option value="">Seleccionar Opcion</option>
                    </select>
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
  data: () => ({}),
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closed");
    },
  },
};
</script>
