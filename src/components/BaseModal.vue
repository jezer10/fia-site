<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="closedModal" class="relative z-10">
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
                <DialogTitle as="h3" class="text-lg uppercase">
                  {{ title }}
                </DialogTitle>
              </div>
              <div class="bg-white rounded-b-lg">
                <slot />
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
  emits: ["close"],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    closedModal() {
      this.$emit("close");
    },
  },
};
</script>
