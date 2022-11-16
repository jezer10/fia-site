<template>
  <alumno-modal @closed="closeModal" :show="modal"></alumno-modal>
  <div class="grid gap-4">
    <div
      class="rounded-lg bg-gray-100 shadow py-4 text-2xl font-bold text-secondary text-center"
    >
      Activate Sistemas
    </div>

    <button
      class="bg-secondary text-white rounded-lg px-4 py-2 shadow whitespace-nowrap"
      @click="aperturar"
    >
      APERTURAR ASISTENCIA
    </button>

    <div class="w-full overflow-x-auto" v-if="this.activate">
      <div class="flex gap-4">
        <select
          class="form-control w-36"
          v-model="form.semestre"
          @change="semesterChange($event.target.value)"
        >
          <option value="" hidden>Semestre</option>
          <option v-for="d in semestres" :value="d.id">
            {{ d.semester }}
          </option>
        </select>

        <select
          class="form-control w-36"
          v-model="form.ciclo"
          v-if="searchedSemester && ciclos.length > 0"
        >
          <option value="" hidden>Ciclo</option>
          <option v-for="c in ciclos" :value="c.id">
            {{ c.cycle }}
          </option>
        </select>

        <button
          class="bg-secondary text-white rounded-lg px-4 py-2 shadow whitespace-nowrap font-medium flex items-center gap-2"
          @click="openPage"
        >
          <span>Filtrar</span>
          <span
            v-if="searchingSemester"
            :class="searchingSemester ? 'animate-spin' : ''"
            >x</span
          >
        </button>
      </div>

      <br />

      <div class="flex items-end gap-4" v-if="this.regEst">
        <div>
          <label for="" class="form-label">Nombres: </label>
          <input
            type="text"
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

        <div>
          <button
            class="bg-secondary text-white rounded-lg px-4 py-2 shadow whitespace-nowrap"
            @click="openModal"
          >
            Registrar Alumnos
          </button>
        </div>
      </div>

      <br />

      <div class="flex gap-4" v-if="this.alumno_asistencia">
        <div>
          <label for="" class="form-label">Nombres: </label>
          <input
            type="text"
            v-model="studentForm.name"
            class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full"
            disabled
          />
        </div>

        <div>
          <label for="" class="form-label">Apellidos: </label>
          <input
            type="text"
            v-model="studentForm.lastame"
            class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full"
            disabled
          />
        </div>

        <div>
          <label for="" class="form-label">Fecha: </label>
          <input
            type="date"
            v-model="studentForm.fecha"
            class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full"
          />
        </div>

        <div>
          <label class="switch">
            <input
              type="checkbox"
              v-model="studentForm.asistencia"
              @change="aer($event)"
            />
            <span class="slider round"></span>
          </label>
        </div>

        <div>
          <button
            class="bg-secondary text-white rounded-lg px-4 py-2 shadow whitespace-nowrap"
            @click="asistencia"
          >
            Registrar Asistencia
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex gap-4">
        <div class="relative flex items-center">
          <input
            type="text"
            class="bg-gray-100 focus:outline-none rounded-lg px-4 py-2 pr-10 text-sm"
            placeholder="Buscar "
          />
          <MagnifyingGlassIcon class="w-4 h-4 text-gray-600 absolute right-4" />
        </div>
        <select
          type="text"
          class="bg-gray-100 focus:outline-none rounded-lg px-4 py-2 text-sm"
        >
          <option value="">Semestre</option>
        </select>
        <select
          type="text"
          class="bg-gray-100 focus:outline-none rounded-lg px-4 py-2 text-sm"
        >
          <option value="" class="bg-blue-50">Ciclo</option>
        </select>
      </div>
      <button class="flex gap-2 rounded-lg bg-secondary px-4 py-2 text-white items-center"><PlusIcon class="w-4 h-4" /><span>Registrar</span></button>
    </div>
    <div class="w-full overflow-x-auto">
      <table>
        <thead class="border-dashed border-b-2">
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha Del Viernes</th>
            <th>Código</th>
            <th>¿Asistió?</th>
          </tr>
        </thead>
        <br />
        <tbody>
          <tr v-for="a in table">
            <td>{{ a.id }}</td>
            <td>{{ a.nombre }}</td>
            <td>{{ a.apellido }}</td>
            <td>{{ a.fecha }}</td>
            <td>{{ a.codigo == true ? "SI" : "NO" }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <Prueba />
  </div>
</template>

<script>
import { client } from "@/api/client";

import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/vue/24/solid";
export default {
  data: () => ({
    searchedSemester: false,
    searchingSemester: false,
    form: {
      semestre: "",
      ciclo: "",
      alumno: "",
      codigo: "",
    },
    studentForm: {
      name: "",
      lastame: "",
      asistencia: "",
      fecha: "",
    },
    semestres: [],
    ciclos: [],
    alumnos: [
      {
        id: 1,
        nombre: "Christian Josue",
        apellido: "Atencio Peña",
        codigo: "201810191",
        ciclo: 1,
      },
      {
        id: 2,
        nombre: "Carlos",
        apellido: "Maldonado Curo",
        codigo: "201810192",
        ciclo: 10,
      },
      {
        id: 3,
        nombre: "Sefora Abigail",
        apellido: "Alarcón Llori",
        codigo: "201810193",
        ciclo: 1,
      },
      {
        id: 4,
        nombre: "Magdiel Manuela",
        apellido: "Carranza Gomez",
        codigo: "2014785",
        ciclo: 5,
      },
      {
        id: 5,
        nombre: "Sulema Diana",
        apellido: "Añamuro Lopez",
        codigo: "2021141232",
        ciclo: 7,
      },
      {
        id: 6,
        nombre: "Kevin Manuel",
        apellido: "Palacín Irrivarren",
        codigo: "2017859674",
        ciclo: 2,
      },
      {
        id: 7,
        nombre: "Salomon Hugo",
        apellido: "Pietro Maximoff",
        codigo: "2016852145",
        ciclo: 7,
      },
      {
        id: 8,
        nombre: "Josue Andre",
        apellido: "Molina Gutierrez",
        codigo: "2016928364",
        ciclo: 2,
      },
    ],
    table: [],
    modal: false,
    regEst: false,
    alumno_asistencia: false,
    cont: 0,
    al_ciclo: [],
    activate: false,
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
      console.log(data);
      this.ciclos = data;
      this.searchedSemester = true;
      this.searchingSemester = false;
    },
    getStudentsByCycle(id) {},
    aperturar() {
      this.activate = true;
    },
    semesterChange(value) {
      this.getCyclesBySemester(value);
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    openPage() {
      if (this.alumnos.length === 0) {
        alert(
          "NO SE ENCUENTRAN REGISTRADOS ALUMNOS EN EL CICLO, PROCEDA A AGREGAR ALUMNOS"
        );
        this.regEst = true;
        this.openModal();
      } else {
        alert("HAY ALUMNOS REGISTRADOS");
        this.al_ciclo = this.alumnos.filter((e) => e.ciclo == this.form.ciclo);
        this.regEst = true;
      }
    },
    addRegister(event) {
      let student = JSON.parse(
        JSON.stringify(this.alumnos.find((e) => e.id == event.target.value))
      );
      console.log(student);
      this.alumno_asistencia = true;
      this.studentForm.name = student.nombre;
      this.studentForm.lastame = student.apellido;
      // this.studentForm.name=student.nombre
    },
    aer(event) {
      console.log(event.target.checked);
      console.log(this.studentForm.asistencia);
    },
    keyUp(event) {
      let code = event.target.value.split("-")[0].trim();
      console.log(code);
      let encontrado = JSON.parse(
        JSON.stringify(this.alumnos.find((e) => e.codigo == code))
      );
      this.alumno_asistencia = true;
      if (encontrado != undefined) {
        //   this.studentForm.name = "REGISTRO NO ENCONTRADO"
        this.studentForm.name = encontrado.nombre;
        this.studentForm.lastame = encontrado.apellido;
        // this.studentForm.lastame = "REGISTRO NO ENCONTRADO"
      }
      // console.log(encontrado);
    },
    asistencia() {
      this.cont++;
      this.table.push({
        id: this.cont,
        nombre: this.studentForm.name,
        apellido: this.studentForm.lastame,
        fecha: this.studentForm.fecha,
        codigo: this.studentForm.asistencia,
      });
    },
  },
  components: { MagnifyingGlassIcon, PlusIcon },
};
</script>

<style>
#border {
  background-image: linear-gradient(
    to right,
    #d9d9d9 40%,
    rgba(255, 255, 255, 0) 20%
  );
  background-position: bottom;
  background-size: 5px 4px;
  background-repeat: repeat-x;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
