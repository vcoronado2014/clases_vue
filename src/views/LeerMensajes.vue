<template>
  <div id="leer-mensajes">
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Bienvenido {{$store.state.usuarioLogueado.email}}</a>
        <button type="button" class="btn btn-secondary" @click="logout()">Cerrar</button>
      </div>
    </nav>
    <div class="container">
        contenido de la vista mensaje
      {{ getSuperTitle() }}
      {{ $store.getters.mensajeTitulo}}
      {{$store.state.usuarioLogueado.email}}
    </div>

  </div>
</template>

<script>
import firebase from 'firebase';
export default {
    components:{
        
    },
    methods: {
        getSuperTitle(){
            //return store.state.superTitulo;
            return this.$store.state.superTitulo
        },
        logout(){
            firebase.auth().signOut().then(()=>{
            this.$router.push({ name: 'Home'});
         })
    }
    },
    created(){
        //console.log(store.getters.superTituloDos);
        console.log('creado leer mensajes');
    }

}
</script>

<style scoped lang="sass">

</style>