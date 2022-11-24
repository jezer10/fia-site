import { createRouter, createWebHistory } from "vue-router";
import Login from "@/layouts/Login/Index.vue";

//DASHBOARD VIEWS
import Dashboard from "@/layouts/Dashboard/Index.vue";
import Inicio from "@/views/Dashboard/Inicio.vue";
import Usuarios from "@/views/Dashboard/Usuarios.vue";
import Eventos from "@/views/Dashboard/Eventos.vue";
import Publicaciones from "@/views/Dashboard/Publicaciones.vue";
import Asistencias from "@/views/Dashboard/Asistencias/Index.vue";
import Configuracion from "@/views/Dashboard/Configuracion.vue";
//Home Views
import Home from "@/layouts/Home/Index.vue";
import Landing from "@/views/Home/Landing.vue";
import VinculacionMedio from "@/views/Home/VinculacionMedio.vue";
import Activate from "@/views/Home/Activate.vue";
import Practicas from "@/views/Home/Practicas.vue";
import PPPContend from "@/views/Home/practica_profesionales.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "",
          component: Landing,
        },
        {
          path: "vinculacion-medio",
          component: VinculacionMedio,
        },
        {
          path: "activate",
          component: Activate,
        },
        {
          path: "practicas",
          component: Practicas,
        },
        {
          path: "pre-professional-practices",
          component: PPPContend
        }
      ],
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
