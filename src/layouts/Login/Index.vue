<script>
import { UserIcon, LockClosedIcon } from "@heroicons/vue/24/solid";
import { client } from "@/api/client";
export default {
  components: { UserIcon, LockClosedIcon },
  methods: {
    async authUser() {
      try {
        const {
          data: {
            data: { token },
          },
        } = await client.post("/auth/sign-in", this.user);
        localStorage.setItem("token", token);
        this.$toast.error("Credenciales Incorrectas");
        this.$router.push({ name: "Home" });
      } catch (error) {
        this.$toast.error("Credenciales Incorrectas");
        console.log(error);
      }
    },
  },
  data: () => ({
    user: {
      email: "",
      passw: "",
    },
  }),
};
</script>
<template>
  <div class="h-screen w-screen relative">
    <img
      src="@/assets/images/logo1.png"
      class="fixed right-32 -z-10 h-screen"
    />
    <header v-if="true" class="bg-blue-500 absolute top-0 inset-x-0">
      <nav class="h-20 bg-primary px-4 flex items-center justify-between">
        <img src="@/assets/icons/logo-upeu1.png" class="h-10" alt="logo upeu" />
        <router-link
          to="/home"
          class="rounded bg-secondary px-4 py-2 shdaow text-white"
        >
          Ir al Inicio</router-link
        >
      </nav>
      <div class="h-2 bg-secondary"></div>
    </header>
    <div class="contenido h-full pt-22">
      <div class="w-full h-full flex">
        <div class="w-1/3 h-full relative">
          <img
            src="@/assets/images/stock-photo.jpg"
            class="w-72 h-72 2xl:w-[360px] 2xl:h-[360px] fixed left-16 bottom-16 2xl:bottom-48 2xl:left-48 -z-10 border-white border-[16px] rounded-full object-cover"
          />
          <img
            src="@/assets/images/stock-photo.jpg"
            class="w-96 h-96 2xl:w-[518px] 2xl:h-[518px] fixed -left-48 -bottom-8 2xl:bottom-32 2xl:-left-48 -z-10 border-white border-[16px] rounded-full object-cover"
          />
          <img
            src="@/assets/images/stock-photo.jpg"
            class="w-96 h-96 2xl:w-[572px] 2xl:h-[572px] fixed -bottom-48 -left-16 2xl:-bottom-44 2xl:-left-32 -z-10 border-white border-[16px] rounded-full object-cover"
          />
        </div>
        <div class="w-2/3 flex items-center justify-center">
          <div class="w-80 grid gap-2">
            <div class="grid gap-4">
              <p class="flex flex-col text-center gap-4">
                <span class="text-primary-light font-bold text-2xl"
                  >Iniciar Sesi??n</span
                >
                <span class="text-sm text-primary"
                  >Bienvenido al panel de control, ingresa tus credenciales para
                  continuar...</span
                >
              </p>
              <button
                class="w-full py-2 shadow rounded-lg hover:shadow-lg bg-white flex items-center justify-center px-4 relative"
              >
                <img
                  src="@/assets/icons/logo-google.png"
                  class="w-4 h-4 absolute left-2"
                />
                <span class="text-sm font-medium"
                  >Iniciar Sesi??n con Google</span
                >
              </button>
              <div class="flex items-center justify-center relative py-2">
                <span class="text-xs absolute bg-white px-1"
                  >O inicia con usuario y contrase??a</span
                >
                <hr class="w-full" />
              </div>
              <div class="relative flex items-center">
                <input
                  v-model="user.email"
                  type="text"
                  class="form-control"
                  placeholder="Usuario"
                />
                <UserIcon class="w-4 h-4 absolute right-4 text-white" />
              </div>
              <div class="relative flex items-center">
                <input
                  v-model="user.passw"
                  type="password"
                  class="form-control"
                  placeholder="Contrase??a"
                />
                <LockClosedIcon class="w-4 h-4 absolute right-4 text-white" />
              </div>
              <button
                @click="authUser()"
                class="bg-primary-light px-4 py-2 rounded-lg class text-white hover:bg-black"
              >
                Ingresar
              </button>
              <p class="text-xs text-center text-primary-light">
                Si tiene problemas con sus credenciales pongase en contacto
                <a href="" class="font-bold">aqu??</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
