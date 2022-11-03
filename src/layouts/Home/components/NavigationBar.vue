<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { client } from "../../../api/client";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronDownIcon,
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
  async mounted() {
    const {
      data: { data },
    } = await client.get("axes/get-all");
    this.routes = data;
  },
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
        <div class="" v-for="r in routes">
          <Popover v-slot="{ open }" class="relative">
            <PopoverButton
              :class="open ? '' : 'text-opacity-90'"
              class="group focus:outline-none"
            >
              <span class="text-xs text-primary font-bold">{{ r.name }}</span>
              <div
                :class="open ? 'w-1/2' : 'w-0 group-hover:w-1/2'"
                class="h-1 bg-secondary rounded-full transition-all duration-1000"
              ></div>
            </PopoverButton>

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <PopoverPanel
                class="absolute top-13.5 right-0 z-10 w-screen max-w-xs px-4 sm:px-0"
              >
                <div
                  class="overflow-hidden rounded-lg bg-gray-500/70 shadow-lg ring-1 ring-black ring-opacity-5"
                >
                  <div class="relative grid gap-4 p-4">
                    <router-link
                      v-for="item in r.subAxes"
                      :key="item.name"
                      :to="item.path"
                      class="flex items-center rounded-lg text-white hover hover:text-secondary focus:outline-none capitalize"
                    >
                      {{ item.name }}
                    </router-link>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </div>
        <div
          class="text-white bg-primary rounded-lg px-4 py-1 text-xs font-medium"
        >
          Ciclo
        </div>
      </div>
    </div>
  </div>
</template>
