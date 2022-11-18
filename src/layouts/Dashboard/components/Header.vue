<script>
import { Bars2Icon } from "@heroicons/vue/24/solid";
export default {
  components: { Bars2Icon },
  data: () => ({}),
};
</script>

<template>
  <header class="h-24 bg-primary fixed inset-x-0  ">
   <div class="h-full relative flex items-center">
    <div class="flex items-center 2xl:gap-16 h-full">
      <div class="relative w-[120px] h-full 2xl:w-[480px]">
        <div
          class="h-full w-[120px] 2xl:w-[480px] bg-secondary rounded-tr-full absolute"
        ></div>
        <div
          class="h-full w-[108px] 2xl:w-[468px] bg-primary rounded-tr-full absolute"
        ></div>
        <div
          class="h-full w-[96px] 2xl:w-[456px] bg-secondary rounded-tr-full absolute"
        ></div>
      </div>
      <div>
        <img
          class="h-8"
          src="@/assets/icons/logo-upeu1.png"
          alt="Dashboard Logo"
        />
      </div>
    </div>
    <button @click="$emit('openMenu')" class="w-8 h-8 text-white bg-secondary absolute p-1 rounded-full right-2">
      <Bars2Icon class="w-full h-full"/>
    </button>
   </div>
  </header>
</template>
