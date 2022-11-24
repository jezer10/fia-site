<template>
  <div class="h-screen w-screen pt-20 fixed inset-0 bg-gray-100">
    <div class="px-16 py-8 h-full flex flex-col gap-8">
      <div
        class="h-24 text-2xl font-bold text-center text-white relative flex items-center justify-center"
      >
        <img
          src="@/assets/images/profile.jpg"
          class="w-full h-full rounded-lg object-cover object-center"
        />
        <div class="w-full h-full absolute bg-blue-900/70 rounded-lg"></div>
        <span class="absolute"> Activate Sistemas</span>
      </div>
      <div class="h-full rounded-lg grid grid-cols-3 gap-8 text-gray-700">
        <div class="rounded-lg bg-gray-200 shadow p-4 flex flex-col gap-4">
          <div class="flex flex-col">
            <span class="font-bold text-2xl">Próximos Eventos</span>
          </div>
          <div class="flex h-full items-center justify-center">
            <img
              src="@/assets/images/profile.jpg"
              class="w-full h-full rounded-lg object-cover object-center"
            />
          </div>
        </div>
        <div class="rounded-lg bg-gray-200 shadow p-4 flex flex-col gap-8">
          <div class="flex flex-col">
            <span class="font-bold text-2xl">Próximo Activate</span>
          </div>
          <div class="flex flex-col gap-8 px-8">
            <div class="grid grid-cols-4 gap-4">
              <div
                class="bg-white rounded-lg text-secondary p-2 flex flex-col items-center w-full"
              >
                <span class="font-bold text-lg">{{ timeLeft.days }}</span>
                <span class="text-xs truncate w-full text-center">Días</span>
              </div>
              <div
                class="bg-white rounded-lg text-secondary p-2 flex flex-col items-center w-full"
              >
                <span class="font-bold text-lg">{{ timeLeft.hours }}</span>
                <span class="text-xs truncate w-full text-center">Horas</span>
              </div>
              <div
                class="bg-white rounded-lg text-secondary p-2 flex flex-col items-center w-full"
              >
                <span class="font-bold text-lg">{{ timeLeft.minutes }}</span>
                <span class="text-xs truncate w-full text-center">Minutos</span>
              </div>
              <div
                class="bg-white rounded-lg text-secondary p-2 flex flex-col items-center w-full"
              >
                <span class="font-bold text-lg">{{ timeLeft.seconds }}</span>
                <span class="text-xs truncate w-full text-center"
                  >Segundos</span
                >
              </div>
            </div>
            <div class="text-xs flex flex-col">
              <span
                ><span class="font-bold">Fecha: </span> Coord. Vinculación con
                el medio EP</span
              >
              <span><span class="font-bold">Hora: </span> +51 976 387 055</span>
              <span
                ><span class="font-bold">Lugar: </span>
                jezerrazuri@upeu.edu.pe</span
              >
            </div>
            <div class="flex flex-col gap-2">
              <button
                class="bg-secondary py-2 w-full rounded-lg text-white font-bold"
              >
                Registrar Asistencia
              </button>
              <button
                class="bg-gray-300 py-2 w-full rounded-lg text-white font-bold"
              >
                Cronograma
              </button>
            </div>
          </div>
        </div>
        <div class="grid grid-rows-2 h-full gap-8">
          <div class="rounded-lg bg-gray-200 shadow p-4">
            <div class="flex flex-col">
              <span class="font-bold text-2xl">Retos</span>
              <span class="font-light text-xs">Retos de la semana</span>
            </div>
            <button class="focus:outline-none text-secondary font-bold">
              Sin Retos
            </button>
          </div>
          <div
            class="rounded-lg bg-gray-200 shadow p-2 relative flex flex-col gap-2"
          >
            <button
              class="text-gray-500 w-6 h-6 rounded-full absolute top-4 right-4"
            >
              <InformationCircleIcon class="w-full h-full" />
            </button>
            <div class="flex flex-col">
              <span class="font-bold text-2xl">Asistencias</span>
              <span class="font-light text-xs"
                >Consulta tus asistencias y faltas</span
              >
            </div>
            <div>
              <input
                :disabled="isCodeSearching"
                @input="search($event.target.value)"
                type="number"
                placeholder="Ingresa tu código universitario"
                class="w-full py-2 px-4 rounded-lg shadow focus:outline-none"
              />
            </div>
            <div class="grid grid-cols-2 text-lg" v-if="isCodeSearched">
              <div class="flex flex-col text-center">
                <span class="font-medium"> Asistencias </span>
                <span class="font-bold"> {{ alumno.asistencias }} </span>
              </div>
              <div class="flex flex-col text-center text-red-600">
                <span class="font-medium"> Faltas </span>
                <span class="font-bold"> {{ alumno.faltas }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { client } from "@/api/client";
import { InformationCircleIcon } from "@heroicons/vue/24/solid";
export default {
  components: {
    InformationCircleIcon,
  },
  data: () => ({
    isCodeSearching: false,
    isCodeSearched: false,
    timeLeft: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    alumno: {
      asistencias: 0,
      faltas: 0,
    },
  }),
  mounted() {
    const s = {
      days: 86400, // feel free to add your own row
      hours: 3600,
      minutes: 60,
      seconds: 1,
    };
    const r = {};
    const date1 = moment().add(7, "days");

    setInterval(() => {}, 1000);
  },
  methods: {
    async search(valorinput) {
      if (valorinput.length == 9) {
        this.isCodeSearching = true;
        await this.obtenerAsistencias(valorinput);
      }
    },
    async obtenerAsistencias(codigoEstudiante) {
      const {
        data: {
          data: { numAttendance, numExcuses, numFouls },
        },
      } = await client.get(`/students/personal-report/${codigoEstudiante}/1`);

      this.alumno.asistencias = numAttendance;
      this.alumno.faltas = numFouls;
      this.isCodeSearched = true;
    },
    updateLeftTime(date1) {
      const date2 = moment();
      let d = date1.diff(date2, "seconds");
      Object.keys(s).forEach((key) => {
        r[key] = Math.floor(d / s[key]);
        d -= r[key] * s[key];
      });
      console.log(r);
      this.timeLeft = r;
    },
  },
};
</script>

<style></style>
