<template>
  <div id="detalle-listado" class="container">
    <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Detalle</a>
    </div>
    </nav>
    <div class="card">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <iframe :src="this.$route.params.mapa" frameborder="0"></iframe>
        <div class="card-body">
            <h5 class="card-title">{{$route.params.nombre}}</h5>
            <p class="card-text">{{$route.params.descripcion}}</p>
            <div class="row">
                <div class="col-7">
                    <small>{{$route.params.lugar}}</small>
                </div>
                <div class="col-5">
                    <span class="badge bg-success">{{$route.params.horario}}</span>
                </div>
            </div>
            <div class="row mt-2">
                <div class="alert alert-info" role="alert">
                    <small>{{$route.params.participantes}}</small>
                </div>
            </div>
            <router-link
            id="link-detalle"
            class="btn btn-primary mt-3"
            to="/Listado"
            >Volver</router-link
        >
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params);
    }
}
</script>

<style>

</style>