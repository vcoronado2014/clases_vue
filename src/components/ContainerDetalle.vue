<template>
  <div id="containerDetalle" class="container contenedores">
      <p>
      {{this.$route.params.nombre}}, {{this.$route.params.descripcion}}, {{this.$route.params.participantes}}, {{this.$route.params.lugar}}
      </p>
      <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4594082841877!2d-70.57293098430219!3d-33.437335580777756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662ce545e03a7dd%3A0x69745b680e41dfc8!2sEstadio%20Banco%20Central!5e0!3m2!1ses!2scl!4v1612568827094!5m2!1ses!2scl" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> -->
      
        <iframe :src="this.$route.params.mapa" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <router-link
          id="link-partido"
          class="btn btn-primary boton-listado mt-1"
          to="/Listado"
          >Volver</router-link
        >
  </div>
</template>

<script>
export default {
    created(){
        console.log('created');
        console.log(this.$route.params);
    }
}
</script>

<style>

</style>