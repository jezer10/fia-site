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
        <span class="absolute"> Vinculación con el Medio </span>
      </div>
      <div class="h-full rounded-lg grid grid-cols-3 gap-8 text-gray-700">
        <div class="rounded-lg bg-gray-200 shadow p-4 flex flex-col gap-4">
          <div class="flex flex-col">
            <span class="font-bold text-2xl">Dirección</span>
            <span class="font-light text-xs">Responsable</span>
          </div>
          <div class="flex items-center justify-center">
            <img
            src="@/assets/images/profile.jpg"
            class="w-28 h-28 rounded-lg object-cover object-center"
          />
          </div>
          <div class="text-xs flex flex-col">
            <span class="font-bold text-lg">Mg. Diana Sanchez Torpoco</span>
            <span
              ><span class="font-bold">Area: </span> Coord. Vinculación con el
              medio EP</span
            >
            <span
              ><span class="font-bold">Celular: </span> +51 976 387 055</span
            >
            <span
              ><span class="font-bold">Correo: </span>
              jezerrazuri@upeu.edu.pe</span
            >
          </div>
        </div>
        <div class="rounded-lg bg-gray-200 shadow p-4 flex flex-col gap-8">
          <div class="flex flex-col">
            <span class="font-bold text-2xl">Próxima Proyección</span>
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
                ><span class="font-bold">Area: </span> Coord. Vinculación con el
                medio EP</span
              >
              <span
                ><span class="font-bold">Celular: </span> +51 976 387 055</span
              >
              <span
                ><span class="font-bold">Correo: </span>
                jezerrazuri@upeu.edu.pe</span
              >
            </div>
            <div class="flex flex-col gap-2">
              <button
                class="bg-secondary py-2 w-full rounded-lg text-white font-bold"
              >
                Participar
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
          <div class="rounded-lg bg-gray-200 shadow"></div>
          <div class="rounded-lg bg-gray-200 shadow p-4 relative">
            <button
              class="text-gray-500 w-6 h-6 rounded-full absolute top-4 right-4"
            >
              <InformationCircleIcon class="w-full h-full"/>
            </button>
            <div class="flex flex-col">
              <span class="font-bold text-2xl">Mis Horas</span>
              <span class="font-light text-xs">Consulta tus horas</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Ingresa tu código universitario"
                class="w-full py-2 px-4 rounded-lg shadow focus:outline-none"
              />
            </div>
            <div>
              <span class="flex items-center gap-1">
                <span class="text-sm font-medium">Total de Horas: </span>
                <span class="font-bold text-2xl"> 0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { InformationCircleIcon } from "@heroicons/vue/24/solid";
export default {
  components: {
    InformationCircleIcon,
  },
  data: () => ({
    timeLeft: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
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
