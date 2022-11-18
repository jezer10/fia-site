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
        <input
          type="text"
          placeholder="Codigo"
          v-model="form.name"
          class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full"
          @keyup="keyUp($event)"
          list="students"
        />
        <datalist id="students" style="width: 50%">
          <option v-for="c in alumnos">
            {{ c.codigo }} - {{ c.nombre }} {{ c.apellido }}
          </option>
        </datalist>
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

    <input
      type="text"
      v-model="studentForm.name"
      placeholder="Nombre Alumno"
      class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full"
      disabled
    />

    <input
      type="date"
      v-model="studentForm.fecha"
      class="bg-gray-100 rounded-lg focus:outline-none px-2 py-2 w-full"
    />

    <div class="flex items-center text-xs gap-4 text-gray-600">
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
    </div>

    <div class="grid grid-cols-2">
      <button
        @click="closeRegister"
        class="text-secondary w-full px-4 py-2 whitespace-nowrap"
      >
        Cancelar
      </button>
      <button
        class="bg-secondary text-white rounded-lg px-4 py-2 w-full shadow whitespace-nowrap"
        @click="asistencia"
      >
        Registrar
      </button>
    </div>
  </div>
</template>

<script>
import { client } from "@/api/client";
import { PlusIcon, PencilIcon } from "@heroicons/vue/24/solid";
import { Switch } from "@headlessui/vue";
import ModalAlumno from "./ModalAlumno.vue";

export default {
  components: { PlusIcon, PencilIcon, Switch, ModalAlumno },
  emits: ["closeRegister"],
  data: () => ({
    isCreateAlumnoOpen: false,
    semestres: [],
    ciclos: [],
    alumnos: [],
    studentForm: {
      name: "",
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
    this.getSemesters();
  },
  methods: {
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
        console.log("Respuesta", response);
      } catch ({ response: { status } }) {
        console.log("Error", status);

        if (status == 404) {
          this.isCreateAlumnoOpen = true;
          console.log(this.form);
        }
      }
    },
    closeRegister() {
      this.$emit("closeRegister");
    },
  },
};
</script>
