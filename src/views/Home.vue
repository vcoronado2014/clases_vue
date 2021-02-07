<template>
  <div class="home">
    <Menu />
    <ContainerHome />
    <RedesSociales />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
//1. importamos nuestro componente
/* import Header from "@/components/Header.vue"; */
import ContainerHome from "@/components/ContainerHome.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import RedesSociales from "@/components/RedesSociales.vue";

export default {
  name: "Home",
  components: {
    /* Header, */
    Menu,
    ContainerHome,
    RedesSociales,
    Footer,
    /* Menu */
  }
};
</script>
