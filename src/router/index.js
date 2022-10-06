import { createRouter, createWebHistory } from "vue-router";
import Login from "@/layouts/Login/Index.vue";

//DASHBOARD VIEWS
import Dashboard from "@/layouts/Dashboard/Index.vue";
import Inicio from "@/views/Dashboard/Inicio.vue";
import Usuarios from "@/views/Dashboard/Usuarios.vue";
import Eventos from "@/views/Dashboard/Eventos.vue";
import Publicaciones from "@/views/Dashboard/Publicaciones.vue";
import Asistencias from "@/views/Dashboard/Asistencias.vue";
import Configuracion from "@/views/Dashboard/Configuracion.vue";
import Home from "@/layouts/Home/Index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:"/home",
      component: Home,
    },
    {
      path: "/",
      component: Dashboard,
      children: [
        {
          path: "",
          component: Inicio,
        },
        {
          path: "usuarios",
          component: Usuarios,
        },
        {
          path: "eventos",
          component: Eventos,
        },
        {
          path: "publicaciones",
          component: Publicaciones,
        },
        {
          path: "asistencias",
          component: Asistencias,
        },
        {
          path: "configuracion",
          component: Configuracion,
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});

export default router;
