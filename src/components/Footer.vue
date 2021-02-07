<template>
  <!-- aca hacemos que el footer solo se muestre cuando el tamaño sea small -->
  <div id="footer" class="d-block d-sm-none">
    <nav class="navbar navbar-dark bg-primary fixed-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Victor Coronado -- 2020</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="sass">
@import '../assets/estilos/variables.scss'


.navbar-brand
  color: $color-light
</style>
