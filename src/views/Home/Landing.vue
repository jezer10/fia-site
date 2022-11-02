<template>
  <div class="flex flex-col overflow-y-auto bg-gray-100">
    <div class="h-screen relative">
      <div class="h-full pt-16">
        <div class="relative h-full flex items-center bg-primary">
          <transition-group
            class="w-full h-full flex"
            name="terrible"
            tag="div"
          >
            <div class="w-full h-full" v-for="i in carrouselImages">
              <img
                src="@/assets/images/image2.jpg"
                class="h-full w-full object-contain"
              />
            </div>
          </transition-group>
          <button
            class="w-12 h-12 rounded-full absolute left-16 p-2 bg-white/40"
          >
            <ChevronLeftIcon class="text-white w-full h-full" />
          </button>
          <button
            class="w-12 h-12 rounded-full absolute right-16 p-2 bg-white/40"
          >
            <ChevronRightIcon class="text-white w-full h-full" />
          </button>
          <div
            class="absolute bottom-0 py-2 items-center justify-center flex inset-x-0 gap-2"
          >
            <button
              class="w-6 h-1 rounded"
              v-for="i in 5"
              :class="
                i == 2 ? 'bg-secondary' : 'bg-black/50 hover:bg-secondary/40'
              "
            ></button>
          </div>
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

<script>
export default {
  data: () => ({
    carrouselImages: [
      {
        path: "/",
      },
      {
        path: "/",
      },
      {
        path: "/",
      },
      {
        path: "/",
      },
      {
        path: "/",
      },
      {
        path: "/",
      },
    ],
  }),
};
</script>
