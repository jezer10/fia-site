<script>
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Listbox,
} from "@headlessui/vue";
import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  CheckIcon,
} from "@heroicons/vue/20/solid";
import { client } from "@/api/client";
import { usePeriodStore } from "@/store/period";
export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    ChevronDownIcon,
    ChevronUpDownIcon,
    CheckIcon,
  },
  setup() {
    const periodStore = usePeriodStore();

    return {
      periodStore,
    };
  },
  data: () => ({
    people: [],
    form: {
      selectedSemester: "",
      selectedCycle: "",
    },
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
  methods: {
    updateSemester(value) {
      this.periodStore.setSemester(value);
      const { id } = value;
      this.periodStore.setCycles(id);
    },
    updateCycle(value) {
      this.periodStore.setCycle(value);
    },
    async getRoutes() {
      const {
        data: { data },
      } = await client.get("axes/get-all");
      this.routes = data;
    },
  },
  async mounted() {},
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
                      class="flex items-center rounded-lg text-white hover hover:text-secondary focus:outline-none capitalize text-xs"
                    >
                      {{ item.name }}
                    </router-link>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </div>

        <div class="w-20">
          <Listbox
            :model-value="periodStore.selectedSemester"
            @update:model-value="updateSemester"
          >
            <div class="relative">
              <ListboxButton
                class="text-white bg-primary rounded px-2 py-1 text-xs font-medium w-full"
              >
                <span class="block truncate">{{
                  periodStore.selectedSemester.semester ?? "Semestre"
                }}</span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-primary py-1 text-white text-base shadow-lg focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="p in periodStore.semesters"
                    :key="p.semester"
                    :value="p"
                    as="template"
                  >
                    <li
                      :class="[
                        active ? 'bg-white text-primary' : 'text-white',
                        'relative cursor-default select-none pl-2 text-xs font-extralight',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate',
                        ]"
                        >{{ p.semester }}</span
                      >
                      <span
                        v-if="selected"
                        class="absolute inset-y-0 right-2 flex items-center"
                        :class="active ? 'text-primary' : 'text-white'"
                      >
                        <CheckIcon class="h-3 w-3" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
        <div class="w-12" v-if="(periodStore.selectedSemester.semester && periodStore.cycles.length >0 )">
          <Listbox
            :model-value="periodStore.selectedCycle"
            @update:model-value="updateCycle"
          >
            <div class="relative">
              <ListboxButton
                class="text-white bg-primary rounded px-2 py-1 text-xs font-medium w-full"
              >
                <span class="block truncate">{{
                  periodStore.selectedCycle.cycle ?? "Ciclo"
                }}</span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-primary py-1 text-white text-base shadow-lg focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="p in periodStore.cycles"
                    :key="p.cycle"
                    :value="p"
                    as="template"
                  >
                    <li
                      :class="[
                        active ? 'bg-white text-primary' : 'text-white',
                        'relative cursor-default select-none pl-2 text-xs font-extralight',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate',
                        ]"
                        >{{ p.cycle }}</span
                      >
                      <span
                        v-if="selected"
                        class="absolute inset-y-0 right-2 flex items-center"
                        :class="active ? 'text-primary' : 'text-white'"
                      >
                        <CheckIcon class="h-3 w-3" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  </div>
</template>
