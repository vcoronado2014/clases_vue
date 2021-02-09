<template>
  <div id="containerListado">
    <!-- envolvemos todo en un div para generar nuestro civlo v-for y aplicamos clases responsivas
    para mostrar solo cuando sea vista small -->
    <!-- ESTE DIV SE VA A MOSTRAR CUANDO SEA X-SMALL O SEA VERTICAL -->
    <div v-for="partido in listadoPartidos" :key="partido.Id" class="d-block d-sm-none">
      <!-- ahora podriamos usar cards para asegurar una mejor vista responsiva -->
      <!-- agregamos card agregamos mt-1 -->
      <div class="card mt-1">
        <!-- agregamos col -->
        <div class="card-body">
          <h5 class="card-title">{{ partido.Nombre }}</h5>
          <p class="card-text">
            {{ partido.Descripcion }}
          </p>
          <router-link id="partido.id" class="btn btn-secondary boton-listado mt-1" 
              :to="{ name: 'Detalle', params: { 
                nombre: partido.Nombre, 
                descripcion: partido.Descripcion, 
                participantes: partido.Participantes, 
                lugar: partido.Lugar,
                mapa: partido.Mapa
                }}"
          >Detalles</router-link>
        </div>
      </div>
    </div>
    <!-- ahora mostramos cuando sea mayor a small -->
    <!-- creamos clase row -->
    <!-- dividimos en columnas iguales -->
    <div class="d-none d-md-block container-fluid">
      <div class="row">
      <div class="col-6">
       <ul class="list-group mt-2">
        <!-- aca generamos nuestra lista -->
        <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-action" 
        v-for="partido in listadoPartidos" :key="partido.Id" @click="mostrarDetalle(partido)">
          {{partido.Nombre}}
          <small>{{partido.Horario}}</small>
        </li>
      </ul>
      </div>
      <div class="col-6 mt-2" v-if="detalleSeleccionado">
        <div class="card">
        <iframe :src="detalleSeleccionado.Mapa" width="400" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <div class="card-body">
          <h5 class="card-title">{{detalleSeleccionado.Nombre}}</h5>
          <p class="card-text">{{detalleSeleccionado.Descripcion}}</p>
        </div>
      </div>
        
      </div>
      <div class="col-6 mt-4" v-else>
        <div class="alert alert-danger" role="alert">
          Debe seleccionar un  partido para ver los detalles respectivos.
        </div>
      </div>
      </div>

    </div>

<!--     <div
      class="list-group"
      v-for="partido in listadoPartidos"
      :key="partido.Id"
    >
      <a class="list-group-item list-group-item-action" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ partido.Nombre }}</h5>
          <small>{{ partido.Horario }}</small>
        </div>
        <p class="mb-1">{{ partido.Descripcion }}</p>
        <small>{{ partido.Participantes }}</small>
        <br>
        <router-link id="partido.id" class="btn btn-secondary boton-listado mt-1" 
        :to="{ name: 'Detalle', params: { 
          nombre: partido.Nombre, 
          descripcion: partido.Descripcion, 
          participantes: partido.Participantes, 
          lugar: partido.Lugar,
          mapa: partido.Mapa
          }}"
        >Detalles</router-link>
      </a>
    </div> -->


<!--             <router-link
          id="link-partido"
          class="btn btn-primary boton-listado mt-1"
          to="/"
          >Volver</router-link
        > -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      listadoPartidos: [
        {
          Id: 1,
          Nombre: "Partido 1",
          Descripcion: "Este partido se realizará por 2 tiempos de 30 minutos",
          Participantes: "Soccer A vs Soccer C",
          Horario: "17-02-2021 16:00",
          Lugar: "Las vizcachas 0987, Santiago",
          Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4594082841877!2d-70.57293098430219!3d-33.437335580777756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662ce545e03a7dd%3A0x69745b680e41dfc8!2sEstadio%20Banco%20Central!5e0!3m2!1ses!2scl!4v1612568827094!5m2!1ses!2scl"
        },
        {
          Id: 2,
          Nombre: "Partido 2",
          Descripcion: "Este partido se realizará por 2 tiempos de 30 minutos",
          Participantes: "Soccer B vs Soccer D",
          Horario: "18-02-2021 17:00",
          Lugar: "Los conquistadores 1324, Santiago",
          Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4594082841877!2d-70.57293098430219!3d-33.437335580777756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662ce545e03a7dd%3A0x69745b680e41dfc8!2sEstadio%20Banco%20Central!5e0!3m2!1ses!2scl!4v1612568827094!5m2!1ses!2scl"
        },
        {
          Id: 3,
          Nombre: "Partido 3",
          Descripcion: "Este partido se realizará por 2 tiempos de 30 minutos",
          Participantes: "Soccer E vs Soccer D",
          Horario: "20-02-2021 16:30",
          Lugar: "Los conquistadores 1324, Santiago",
          Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4594082841877!2d-70.57293098430219!3d-33.437335580777756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662ce545e03a7dd%3A0x69745b680e41dfc8!2sEstadio%20Banco%20Central!5e0!3m2!1ses!2scl!4v1612568827094!5m2!1ses!2scl"
        },
        {
          Id: 4,
          Nombre: "Partido 4",
          Descripcion: "Este partido se realizará por 2 tiempos de 30 minutos",
          Participantes: "Soccer E vs Soccer D",
          Horario: "20-02-2021 16:30",
          Lugar: "Los conquistadores 1324, Santiago",
          Mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4594082841877!2d-70.57293098430219!3d-33.437335580777756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662ce545e03a7dd%3A0x69745b680e41dfc8!2sEstadio%20Banco%20Central!5e0!3m2!1ses!2scl!4v1612568827094!5m2!1ses!2scl"
        }
      ],
      detalleSeleccionado: null
    };
  },
  created() {
    console.log("se ha creado");
  },
  methods: {
    abrirDetalle(partido) {
      console.log("se gatilló");
      console.log(partido);
      this.$router.push({
        name: 'Detalle',
        params: {
          nombres: partido.nombres,
          descripcion: partido.descripcion
        }
      })
    },
    mostrarDetalle(partido){
      console.log(partido);
      this.detalleSeleccionado = partido;
      console.log(this.detalleSeleccionado);
    }
  }
};
</script>

<style scoped lang="sass">
@import '../assets/estilos/variables.scss'
.boton-listado
    color: $color-light

#nav a.router-link-exact-active 
    color: $color-light

</style>
