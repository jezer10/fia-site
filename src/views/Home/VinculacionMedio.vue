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
            <span class="font-bold text-lg">Dirección</span>
            <span class="font-light text-xs">Responsable</span>
          </div>
          <img
            src="@/assets/images/profile.jpg"
            class="w-24 h-24 rounded-lg object-cover object-center"
          />
          <div class="text-xs flex flex-col">
            <span class="font-bold">Mg. Diana Sanchez Torpoco</span>
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
        <div class="rounded-lg bg-gray-200 shadow p-4">
          <div class="flex flex-col">
            <span class="font-bold text-lg">Próxima Proyección</span>
          </div>
          <div class="flex gap-4">
            <div
              class="bg-white rounded-lg text-secondary p-2 flex flex-col items-center w-full"
            >
              <span class="font-bold text-lg">8</span>
              <span class="text-xs">Días</span>
            </div>
            <div
              class="bg-white rounded-lg text-secondary p-2 flex flex-col items-center w-full"
            >
              <span class="font-bold text-lg">8</span>
              <span class="text-xs">Horas</span>
            </div>
            <div
              class="bg-white rounded-lg text-secondary p-2 flex flex-col items-center w-full"
            >
              <span class="font-bold text-lg">8</span>
              <span class="text-xs">Minutos</span>
            </div>
            <div
              class="bg-white rounded-lg text-secondary p-2 flex flex-col items-center w-full"
            >
              <span class="font-bold text-lg">8</span>
              <span class="text-xs">Segundos</span>
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-gray-200 shadow"></div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data: () => ({}),
  mounted() {
    const date1 = moment().add(7, "days");
    const date2 = moment()
    console.log(date1.diff(date2,'days'))
    console.log(date1.diff(date2,'hours'))
    console.log(date1.diff(date2,'minutes'))
    console.log(date1.diff(date2,'seconds'))

  },
};
</script>
