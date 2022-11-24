<template>
  <modal-alumno
    :cycle="form.ciclo"
    :show="isCreateAlumnoOpen"
    @closed="isCreateAlumnoOpen = false"
  />
  <div class="w-full grid 2xl:grid-cols-3 gap-4">
    <div class="grid grid-cols-2 gap-4">
      <select
        class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full text-sm"
        v-model="form.semestre"
        @change="semesterChange($event.target.value)"
      >
        <option value="" hidden>Semestre</option>
        <option v-for="d in semestres" :value="d.id">
          {{ d.semester }}
        </option>
      </select>

      <select
        class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full text-sm"
        v-model="form.ciclo"
        v-if="searchedSemester && ciclos.length > 0"
        @change="cycleChange($event.target.value)"
      >
        <option value="" hidden>Ciclo</option>
        <option v-for="c in ciclos" :value="c.id">
          {{ c.cycle }}
        </option>
      </select>
    </div>

    <div class="flex gap-4" v-if="form.ciclo && form.semestre">
      <div class="w-full">
        <Combobox v-model="studentForm.student">
          <div class="relative mt-1">
            <div class="relative">
              <ComboboxInput
                class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full"
                :displayValue="(person) => person.names"
                @change="query = $event.target.value"
              />
              <ComboboxButton
                class="absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <ChevronUpDownIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </ComboboxButton>
            </div>
            <TransitionRoot
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              @after-leave="query = ''"
            >
              <ComboboxOptions
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <div
                  v-if="filteredPeople.length === 0 && query !== ''"
                  class="relative cursor-default select-none py-2 px-4 text-gray-700"
                >
                  No Hay Alumnos Registrados
                </div>

                <ComboboxOption
                  v-for="person in filteredPeople"
                  as="template"
                  :key="person.id"
                  :value="person"
                  v-slot="{ selected, active }"
                >
                  <li
                    class="relative cursor-default select-none py-2 pl-10 pr-4"
                    :class="{
                      'bg-teal-600 text-white': active,
                      'text-gray-900': !active,
                    }"
                  >
                    <span
                      class="block truncate"
                      :class="{
                        'font-medium': selected,
                        'font-normal': !selected,
                      }"
                    >
                      <span>{{ person.names }} </span>
                      <span class="font-bold text-xs ml-2">
                        {{ person.code }}
                      </span>
                    </span>
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3"
                      :class="{
                        'text-white': active,
                        'text-teal-600': !active,
                      }"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ComboboxOption>
              </ComboboxOptions>
            </TransitionRoot>
          </div>
        </Combobox>
      </div>

      <button
        class="bg-primary text-white rounded-lg w-12 flex-none flex justify-center items-center shadow whitespace-nowrap"
        @click="openModal"
      >
        <plus-icon class="w-4 h-4" />
      </button>
      <button
        class="bg-yellow-500 text-white rounded-lg w-12 flex-none flex justify-center items-center shadow whitespace-nowrap"
        @click="openModal"
        v-if="form.alumno"
      >
        <pencil-icon class="w-4 h-4" />
      </button>
    </div>
    <datepicker
      v-model="studentForm.fecha"
      class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full"
      :enableTimePicker="false"
      :weekStart="0"
      inputClassName="form-control"
      :disabledWeekDays="[0, 1, 2, 3, 4, 6]"
      locale="es"
    />
    <div class="relative">
      <button
        @click="isSelectOpen = !isSelectOpen"
        class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full relative flex items-center"
      >
        <span class="text-gray-600"> Participación </span>
        <ChevronDownIcon class="w-4 h-4 absolute right-2" />
      </button>
      <div
        class="w-full rounded bg-white shadow p-4 mt-2 absolute"
        v-if="isSelectOpen"
      >
        <div
          class="px-4 py-1 flex items-center gap-4 rounded text-gray-600 hover:bg-gray-400 hover:text-white cursor-pointer"
        >
          <CheckIcon class="w-4 h-4" />
          <span> Asistió </span>
        </div>
        <div
          class="px-4 py-1 flex items-center gap-4 rounded text-gray-600 hover:bg-gray-400 hover:text-white cursor-pointer"
        >
          <XMarkIcon class="w-4 h-4" />
          <span> Faltó </span>
        </div>
        <div
          class="px-4 py-1 flex items-center gap-4 rounded text-gray-600 hover:bg-gray-400 hover:text-white cursor-pointer"
        >
          <EllipsisHorizontalCircleIcon class="w-4 h-4" />
          <span> Asistió </span>
        </div>
      </div>
    </div>
    <div >
      <Listbox v-model="selectedPerson">
        <div class="relative mt-1">
          <ListboxButton
            class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span class="block truncate">{{ selectedPerson.name }}</span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronUpDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="person in people"
                :key="person.name"
                :value="person"
                as="template"
              >
                <li
                  :class="[
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ person.name }}</span
                  >
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                  >
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
    <!-- <div class="flex items-center text-xs gap-4 text-gray-600">
      <Switch
        v-model="studentForm.asistencia"
        :class="studentForm.asistencia ? 'bg-primary' : 'bg-gray-100'"
        class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="studentForm.asistencia ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
      <span>¿Asistio?</span>
    </div> -->

    <div class="grid grid-cols-2">
      <button
        @click="closeRegister"
        class="text-secondary w-full px-4 py-2 whitespace-nowrap"
      >
        Cancelar
      </button>
      <button
        class="bg-secondary text-white rounded-lg px-4 py-2 w-full shadow whitespace-nowrap"
        @click="registerAttendance"
      >
        Registrar
      </button>
    </div>
  </div>
</template>

<script>
import "@fullcalendar/core/vdom";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { client } from "@/api/client";
import {
  PlusIcon,
  PencilIcon,
  CheckIcon,
  ChevronUpDownIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/vue/24/solid";
import { EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/outline";
import {
  Switch,
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import ModalAlumno from "./ModalAlumno.vue";
import moment from "moment";
export default {
  components: {
    FullCalendar,
    PlusIcon,
    PencilIcon,
    CheckIcon,
    ChevronUpDownIcon,
    ChevronDownIcon,
    XMarkIcon,
    EllipsisHorizontalCircleIcon,
    Switch,
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
    ModalAlumno,
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  emits: ["closeRegister"],
  data: () => ({
    calendarOptions: {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: "dayGridMonth",
    },
    isSelectOpen: false,
    isCreateAlumnoOpen: false,
    semestres: [],
    ciclos: [],
    alumnos: [],
    selectedPerson: {},
    people: [
      { name: "Wade Cooper" },
      { name: "Arlene Mccoy" },
      { name: "Devon Webb" },
      { name: "Tom Cook" },
      { name: "Tanya Fox" },
      { name: "Hellen Schmidt" },
    ],
    query: "",
    studentForm: {
      student: {},
      fecha: "",
      asistencia: false,
    },
    searchingSemester: false,
    searchedSemester: false,
    form: {
      semestre: "",
      ciclo: "",
      alumno: "",
    },
  }),
  mounted() {
    this.selectedPerson = this.people[0];
    this.getSemesters();
  },
  methods: {
    openModal() {
      this.isCreateAlumnoOpen = true;
    },

    async registerAttendance() {
      const { asistencia, fecha, student } = this.studentForm;
      const formattedDate = moment(fecha).format("DD/MM/YYYY");
      const body = {
        attended: asistencia ? 1 : 0,
        date: formattedDate,
        idStudent: student.id,
      };
      console.log(body);
      const response = await client.post("/students/register-attendance", body);
      console.log(response);
    },
    async getSemesters() {
      const {
        data: { data },
      } = await client.get("academic/get-semesters");
      this.semestres = data;
    },
    semesterChange(value) {
      this.getCyclesBySemester(value);
    },

    cycleChange(value) {
      this.getStudentsByCycle(value);
    },

    async getCyclesBySemester(id) {
      this.ciclos = [];
      this.searchingSemester = true;
      const response = await client.get(`academic/get-cycles/${id}`);
      const {
        status,
        data: { data },
      } = response;
      if (status != 200) {
        this.searchingSemester = false;
        this.searchedSemester = false;
        return;
      }
      this.ciclos = data;
      this.searchedSemester = true;
      this.searchingSemester = false;
    },
    async getStudentsByCycle(id) {
      this.alumnos = [];
      try {
        const response = await client.get(
          `https://server-sites.herokuapp.com/api/students/get-by-cycle/${id}`
        );
        const {
          data: { data },
        } = response;

        this.alumnos = data;
      } catch ({ response: { status } }) {
        if (status == 404) {
          this.$toast.error(
            `No hay alumnos existentes, Intente Registar Alguno`
          );
          this.isCreateAlumnoOpen = true;
        }
      }
    },
    closeRegister() {
      this.$emit("closeRegister");
    },
  },
  computed: {
    filteredPeople() {
      return this.query === ""
        ? this.alumnos
        : this.alumnos.filter((alumno) =>
            alumno.names
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(this.query.toLowerCase().replace(/\s+/g, ""))
          );
    },
  },
};
</script>
