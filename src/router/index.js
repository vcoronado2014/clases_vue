import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Listado from "../views/Listado.vue";
import Detalle from "../views/Detalle.vue";
import Login from "../views/Login.vue";
import LeerMensajes from "../views/LeerMensajes.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Listado",
    name: "Listado",
    component: Listado
  },
  {
    path: "/LeerMensajes",
    name: "LeerMensajes",
    component: LeerMensajes
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Detalle",
    name: "Detalle",
    props: true,
    component: Detalle
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
