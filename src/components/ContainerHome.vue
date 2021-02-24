<template>
  <!-- agregamos container  -->
  <div id="containerHome" class="container">
    <h1>{{$store.getters.obtenerElemento1}}</h1>
    <button @click.prevent="cambiarTitulo">Cambiar supertitulo</button>
    <!-- {{$store.getters.isLoguedIn}} -->
    <!-- agregamos row y personalizamos card por una clase card-home agregamos mt-1 -->
    <div class="card-home row mt-1">
      <!-- agregamos col y un mt-2 a la imagen-->
      <div class="col-12 col-sm-4 mt-2">
       <img
        src="../assets/imgs/design1_image1.jpg"
        class="card-img-top mt-2"
        alt="img"
        /> 
      </div>
      <!-- agregamos col -->
      <div class="card-body col-12 col-sm-8">
        <h5 class="card-title">Soccer League</h5>
        <p class="card-text">
        Esta aplicación muestra
        información relevente
        para los jugadores, padres,
        o invitados de soccer league,
        en el menú podrás dirigirte al
        Listado de partidos
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: "ContainerHome",
  methods: {
    abrirListado() {
      console.log("se gatilló");
      this.$router.push("/Listado");
    },
    cambiarTitulo(){
      console.log(this.$store.getters.obtenerElemento1);
      this.$store.dispatch('setTituloAction', 'Este ahora es un nuevo titulo');
      
    }
  },
  created(){
    if (this.$store.getters.isLoguedIn){
      let db = firebase.database();
      let mensajesRef = db.ref('mensajes');
      mensajesRef.on('value', datos =>{
        const data = datos.val();
        if (data){
          console.log(data);
          Object.keys(data).forEach(indice => {
            console.log(indice);
            console.log(data[indice]);
          });
        }
      })
    }
  }
};
</script>

<style scoped lang="sass">
@import '../assets/estilos/variables.scss'
.boton-listado
    color: $color-light

.card-home 
    position: relative
    display: flex
    flex-direction: row
    min-width: 0
    word-wrap: break-word
    background-color: #fff
    background-clip: border-box
    border: 1px solid rgba(0,0,0,.125)
    border-radius: .25rem

</style>
