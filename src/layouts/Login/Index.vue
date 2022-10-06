<script>
import { UserIcon, LockClosedIcon } from "@heroicons/vue/24/solid";
export default {
  components: { UserIcon, LockClosedIcon },
};
</script>
<template>
  <div class="h-screen w-screen relative">
    <header v-if="true" class="bg-blue-500 absolute top-0 inset-x-0">
      <nav class="h-20 bg-primary px-4 flex items-center justify-between">
        <img src="@/assets/icons/logo-upeu1.png" class="h-10" alt="logo upeu" />
        <a href="" class="rounded bg-secondary px-4 py-2 shdaow text-white">
          Ir al Inicio</a
        >
      </nav>
      <div class="h-2 bg-secondary"></div>
    </header>
    <div class="contenido h-full pt-22">
      <div class="w-full h-full flex">
        <div class="w-1/2 h-full relative">
          <img
            src="@/assets/images/stock-photo.jpg"
            alt=""
            class="w-72 h-72 fixed bottom-24 left-24 border-white border-8 rounded-full object-cover"
          />
          <img
            src="@/assets/images/stock-photo.jpg"
            alt=""
            class="w-96 h-96 fixed bottom-0 -left-48 border-white border-8 rounded-full object-cover"
          />
          <img
            src="@/assets/images/stock-photo.jpg"
            alt=""
            class="w-96 h-96 fixed -bottom-44 -left-8 border-white border-8 rounded-full object-cover"
          />
        </div>
        <div class="w-1/2 flex items-center justify-center">
          <div class="w-80 grid gap-2">
            <div>
              <p class="flex flex-col text-center">
                <span class="text-primary-light font-bold text-2xl"
                  >Iniciar Sesión</span
                >
                <span class="text-sm text-primary"
                  >Bienvenido al panel de control, ingresa tus credenciales para
                  continuar...</span
                >
              </p>
            </div>
            <div class="grid gap-4">
              <div class="relative flex items-center">
                <input type="text" class="form-control" placeholder="Usuario" />
                <UserIcon class="w-4 h-4 absolute right-4 text-white" />
              </div>
              <div class="relative flex items-center">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Contraseña"
                />
                <LockClosedIcon class="w-4 h-4 absolute right-4 text-white" />
              </div>
              <button
                class="bg-primary-light px-4 py-2 rounded-lg class text-white"
              >
                Ingresar
              </button>
            </div>
            <div>
              <p class="text-xs text-center text-primary-light">
                Si tiene problemas con sus credenciales pongase en contacto
                <a href="" class="font-bold">aquí</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
