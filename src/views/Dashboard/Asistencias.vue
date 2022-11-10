<template>
  <alumno-modal @closed="closeModal" :show="modal"></alumno-modal>
  <div class="grid gap-4">
    <div class="rounded-lg bg-gray-100 shadow py-4 text-2xl font-bold text-secondary text-center">
      Activate Sistemas
    </div>

    <button class="bg-secondary text-white rounded-lg px-4 py-2 shadow whitespace-nowrap" @click="aperturar">
          APERTURAR ASISTENCIA
        </button>
    <!-- <div class="flex justify-between items-center w-full">
      <div class="flex gap-4">
        <select class="form-control w-36" v-model="form.semestre">
          <option value="">Semestre</option>
          <option v-for="s in semestres" :value="s.id">
            {{ s.name }}
          </option>
        </select>
        <select class="form-control w-36" v-model="form.ciclo">
          <option value="" hidden>Ciclo</option>
          <option v-for="c in ciclos" :value="c.id">
            {{ c.name }}
          </option>
        </select>
      </div>
      <button
        class="bg-secondary text-white rounded-lg px-4 py-2 shadow whitespace-nowrap"
      >
        Nuevo Registro
      </button>
    </div> -->

    <div class="w-full overflow-x-auto" v-if="this.activate">
      <div class="flex gap-4">
        <select class="form-control w-36" v-model="form.semestres2" @change="onChange($event)">
          <option value="">Semestre</option>
          <option v-for="d in semestres2" :value="d.id">
            {{ d.semestre }}
          </option>
        </select>

        <select class="form-control w-36" v-model="form.ciclo">
          <option value="" hidden>Ciclo</option>
          <option v-for="c in ciclos2" :value="c.id">
            {{ c.name }}
          </option>
        </select>

        <button class="bg-secondary text-white rounded-lg px-4 py-2 shadow whitespace-nowrap" @click="openPage">
          FILTRAR
        </button>
      </div>

      <br>



      <div class="flex gap-4" v-if="this.regEst">

        <div>
          <label for="" class="form-label">Nombres: </label>
          <input type="text" v-model="form.name" class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full"
            @keyup="keyUp($event)" list="students"/>
          <datalist id="students" style="width: 50%">
            <option v-for="c in alumnos">{{ c.codigo }} - {{ c.nombre }} {{ c.apellido }}</option>
          </datalist>
        </div>

        <!-- <select class="form-control w-96" v-model="form.codigo" @change="addRegister($event)">
          <option value="">Estudiantes</option>
          <option v-for="a in alumnos" :value="a.id">
            {{ a.codigo }} - {{ a.nombre }} {{ a.apellido }}
          </option>
        </select> -->
        <div>
          <button class="bg-secondary text-white rounded-lg px-4 py-2 shadow whitespace-nowrap" @click="openModal">
            Registrar Alumnos
          </button>
        </div>
      </div>

      <br>

      <div class="flex gap-4" v-if="this.alumno_asistencia">
        <div>
          <label for="" class="form-label">Nombres: </label>
          <input type="text" v-model="studentForm.name"
            class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full" disabled />
        </div>

        <div>
          <label for="" class="form-label">Apellidos: </label>
          <input type="text" v-model="studentForm.lastame"
            class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full" disabled />
        </div>

        <div>
          <label for="" class="form-label">Fecha: </label>
          <input type="date" v-model="studentForm.fecha"
            class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full" />
        </div>

        <div>
          <!-- <label><input type="checkbox" v-model="studentForm.asistencia" @change="aer($event)"> ASISTIÓ </label> -->
          <label class="switch">
            <input type="checkbox" v-model="studentForm.asistencia" @change="aer($event)">
            <span class="slider round"></span>
          </label>
          <!-- <input type="text" v-model="studentForm.fecha"
            class="bg-gray-100 rounded-lg focus:outline-none px-4 py-2 w-full" /> -->

        </div>

        <div>
          <button class="bg-secondary text-white rounded-lg px-4 py-2 shadow whitespace-nowrap" @click="asistencia">
            Registrar Asistencia
          </button>
        </div>
      </div>
    </div>

    <div class="w-full overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha Del Viernes</th>
            <th>Código</th>
            <th>¿Asistió?</th>
          </tr>
        </thead>
        <br>
        <tbody>
          <tr v-for="a in table">
            <td>{{ a.id }}</td>
            <td>{{ a.nombre }}</td>
            <td>{{ a.apellido }}</td>
            <td>{{ a.fecha }}</td>
            <td>{{ a.codigo == true ? 'SI' : 'NO' }}</td>
            <td>

            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      semestre: "",
      ciclo: "",
      semestres2: '',
      alumno: '',
      codigo: ''
    },
    studentForm: {
      name: '',
      lastame: '',
      asistencia: '',
      fecha: '',
    },
    semestres: [
      { id: 1, name: "Semestre 1" },
      { id: 2, name: "Semestre 2" },
      { id: 3, name: "Semestre 3" },
      { id: 4, name: "Semestre 4" },
      { id: 5, name: "Semestre 5" },
      { id: 6, name: "Semestre 6" },
      { id: 7, name: "Semestre 7" },
      { id: 8, name: "Semestre 8" },
      { id: 9, name: "Semestre 9" },
      { id: 10, name: "Semestre 10" },
    ],
    ciclos: [
      {
        id: 1,
        name: "Ciclo 1",
        semestre: '1'
      },
      {
        id: 2,
        name: "Ciclo 2",
        semestre: '2'
      },
      {
        id: 3,
        name: "Ciclo 3",
        semestre: '1'
      },
      {
        id: 4,
        name: "Ciclo 4",
        semestre: '2'
      },
      {
        id: 5,
        name: "Ciclo 5",
        semestre: '1'
      },
      {
        id: 6,
        name: "Ciclo 6",
        semestre: '2'
      },
      {
        id: 7,
        name: "Ciclo 7",
        semestre: '1'
      },
      {
        id: 8,
        name: "Ciclo 8",
        semestre: '2'
      },
      {
        id: 9,
        name: "Ciclo 9",
        semestre: '1'
      },
      {
        id: 10,
        name: "Ciclo 10",
        semestre: '2'
      },
    ],

    semestres2: [
      { id: 1, semestre: '2022 - 1' },
      { id: 2, semestre: '2022 - 2' },
      { id: 3, semestre: '2023 - 1' },
      { id: 4, semestre: '2023 - 2' },
      { id: 5, semestre: '2024 - 1' },
      { id: 6, semestre: '2024 - 2' },
      { id: 7, semestre: '2025 - 1' },
      { id: 8, semestre: '2025 - 2' }
    ],
    alumnos: [
      { id: 1, nombre: 'Christian Josue', apellido: 'Atencio Peña', codigo: '201810191'  , ciclo : 1},
      { id: 2, nombre: 'Carlos', apellido: 'Maldonado Curo', codigo: '201810192'  , ciclo : 10},
      { id: 3, nombre: 'Sefora Abigail', apellido: 'Alarcón Llori', codigo: '201810193'  , ciclo : 1},
      { id: 4, nombre: 'Magdiel Manuela', apellido: 'Carranza Gomez', codigo: '2014785'  , ciclo : 5},
      { id: 5, nombre: 'Sulema Diana', apellido: 'Añamuro Lopez', codigo: '2021141232'  , ciclo : 7},
      { id: 6, nombre: 'Kevin Manuel', apellido: 'Palacín Irrivarren', codigo: '2017859674'  , ciclo : 2},
      { id: 7, nombre: 'Salomon Hugo', apellido: 'Pietro Maximoff', codigo: '2016852145' , ciclo : 7 },
      { id: 8, nombre: 'Josue Andre', apellido: 'Molina Gutierrez', codigo: '2016928364'  , ciclo : 2},
    ],
    table: [
    ],
    modal: false,
    ciclos2: [],
    regEst: false,
    alumno_asistencia: false,
    cont: 0,
    al_ciclo : [],
    activate : false
  }),
  // mounted() {
  //   this.openPage()
  // },
  methods: {
    aperturar(){
      this.activate = true
    },
    onChange(event) {
      let semestre = JSON.parse(JSON.stringify(this.semestres2.find(e => e.id == event.target.value))).semestre
      this.ciclos2 = this.ciclos
      let sm = semestre.split('-')[1].trim()
      this.ciclos2 = JSON.parse(JSON.stringify(this.ciclos2.filter(e => e.semestre == sm)))
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    openPage() {
      if (this.alumnos.length === 0) {
        alert('NO SE ENCUENTRAN REGISTRADOS ALUMNOS EN EL CICLO, PROCEDA A AGREGAR ALUMNOS')
        this.regEst = true
        this.openModal()
      } else {
        alert('HAY ALUMNOS REGISTRADOS')
        this.al_ciclo = this.alumnos.filter(e => e.ciclo == this.form.ciclo)
        this.regEst = true


      }
    },
    addRegister(event) {
      let student = JSON.parse(JSON.stringify(this.alumnos.find(e => e.id == event.target.value)))
      console.log(student);

      this.alumno_asistencia = true

      this.studentForm.name = student.nombre
      this.studentForm.lastame = student.apellido
      // this.studentForm.name=student.nombre

    },
    aer(event) {
      console.log(event.target.checked);
      console.log(this.studentForm.asistencia);
    },
    keyUp(event) {
      let code = event.target.value.split('-')[0].trim()
      console.log(code);

      let encontrado = JSON.parse(JSON.stringify(this.alumnos.find(e => e.codigo == code)))

      this.alumno_asistencia = true
      if (encontrado != undefined) {
        //   this.studentForm.name = "REGISTRO NO ENCONTRADO"
        this.studentForm.name = encontrado.nombre
        this.studentForm.lastame = encontrado.apellido
        // this.studentForm.lastame = "REGISTRO NO ENCONTRADO"


      }
      // console.log(encontrado);



    },
    asistencia() {
      this.cont++
      this.table.push({
        id: this.cont,
        nombre: this.studentForm.name,
        apellido: this.studentForm.lastame,
        fecha: this.studentForm.fecha,
        codigo: this.studentForm.asistencia
      })
    }
  }
};
</script>

<style>
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
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #2196F3;
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
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
