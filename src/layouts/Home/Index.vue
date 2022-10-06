<template>
  <div class="flex flex-col overflow-y-auto bg-gray-100">
    <div class="h-screen relative">
      <div class="pb-24 h-full">
        <div class="relative h-full">
          <img
            src="@/assets/images/image2.jpg"
            class="h-full w-full object-cover"
          />
          <div
            class="absolute bottom-0 py-2 items-center justify-center flex inset-x-0 gap-2"
          >
            <div
              class="w-6 h-1 rounded"
              v-for="i in 5"
              :class="i == 2 ? 'bg-secondary' : 'bg-black/50'"
            ></div>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 z-10">
        <div class="bg-secondary h-2"></div>
        <div
          class="bg-primary h-22 flex items-center px-8 justify-between relative"
        >
        <img src="@/assets/images/circuito.png" class="h-full  absolute right-0" alt="">

          <img
            src="@/assets/images/circuito.png"
            class="h-full rotate-180 absolute left-0"
            alt=""
          />
          <p class="text-white flex flex-col">
            <span class="font-thin text-sm">Escuela profesional de</span>
            <span class="font-bold text-xl">Ingeniería de Sistemas</span>
          </p>
          <img src="@/assets/icons/logo-upeu1.png" class="h-10" />
        </div>
      </div>
    </div>

    <div class="h-screen p-4">
      <div class="w-full h-full grid grid-cols-2 gap-4">
        <div class="bg-white rounded shadow relative">
          <div class="h-16 flex items-center px-4 absolute inset-x-0">
            <span class="font-bold text-lg">Eventos</span>
          </div>
          <div class="h-full pt-16">
            <div class="bg-primary text-white p-4 relative flex items-center">
              <div class="flex flex-col">
                <span class="font-bold text-lg"> Cultura </span>
                <span class="text-sm font-light">4:15 PM - 6:45 PM</span>
              </div>
              <div
                class="p-4 h-full bg-indigo-600 absolute right-0 flex flex-col items-center"
              >
                <span class="font-bold text-lg">09</span>
                <span class="">OCT.</span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-rows-4 gap-4">
          <div class="bg-white rounded shadow">
            <div class="font-bold p-2">Culturas</div>
          </div>
          <div class="bg-white rounded shadow">
            <div class="font-bold p-2">Activate</div>
          </div>
          <div class="bg-white rounded shadow"></div>
          <div class="bg-white rounded shadow"></div>
        </div>
      </div>
    </div>
    <div class="h-screen"></div>
    <div class="px-4 pb-4">
      <span class="text-xs text-gray-400">2022 UPEU</span>
    </div>
  </div>
</template>
