<template>
<div id="detalle">
    <Header />
    <ContainerDetalle />
    <Footer />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ContainerDetalle from "@/components/ContainerDetalle.vue";

export default {
  components: {
    Header,
    ContainerDetalle,
    Footer
  }
}
</script>

<style>

</style>