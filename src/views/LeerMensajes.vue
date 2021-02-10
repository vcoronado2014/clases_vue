<template>
  <div id="leer-mensajes" class="container">
      contenido de la vista mensaje
      {{ getSuperTitle() }}
  </div>
</template>

<script>
//import {store} from '../../src/store/index';
export default {
    methods: {
        getSuperTitle(){
            //return store.state.superTitulo;
            return this.$store.state.superTitulo
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