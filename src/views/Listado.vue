<template>
  <div id="listado">
    <Menu titulo="Listado de partidos" />
    <ContainerListado />
    <!-- <Footer /> -->
  </div>
</template>

<script>
/* import Header from "@/components/Header.vue"; */
import Menu from "@/components/Menu.vue";
import ContainerListado from "@/components/ContainerListado.vue";
/* import Footer from "@/components/Footer.vue"; */
export default {
  components: {
    /* Header, */
    Menu,
    ContainerListado,
    /* Footer */
  }
};
</script>

<style scoped lang="sass"></style>
