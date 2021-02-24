<template>
  <div id="header">
    <!--agregamos fixed-top -->
    <nav class="navbar navbar-dark bg-primary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Bienvenidos a mi APP</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="sass">
@import "../assets/sass/variables.scss"
.titulo
    color: red
    background-color: blue
h3
    padding: 1em
    text-align: center
</style>
