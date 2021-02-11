<template>
  <div id="header">
    <!--agregamos fixed-top -->
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Login</a>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase';
import '@/firebase/init';
export default {
  name: "Header",
  methods:{
    logout(){
      firebase.auth().signOut().then(()=>{
        this.$route.push({ name: 'Home'});
      })
    }
  }
};
</script>

<style scoped lang="sass">

.titulo
    color: red
    background-color: blue
h3
    padding: 1em
    text-align: center
</style>
