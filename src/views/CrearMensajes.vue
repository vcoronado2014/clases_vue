<template>
  <div id="crear-mensajes">
    <div class="card mt-5">
        <div class="card-body">
        <form @submit.prevent="postMessage">
            <h5 class="card-title">Ingrese el mensaje</h5>
            <div class="mb-3">
                <label for="tituloMensaje" class="form-label">Titulo del mensaje</label>
                <input type="text" class="form-control" id="tituloMensaje" aria-describedby="emailHelp" v-model="newMensaje.title" required>
                <div class="invalid-feedback">
                    Titulo requerido
                </div>
            </div>
            <div class="mb-3">
                <label for="contenidoMensaje" class="form-label">Contenido</label>
                <input type="text" class="form-control" id="contenidoMensaje" v-model="newMensaje.body" required>
                <div class="invalid-feedback">
                    Contenido requerido.
                </div>
            </div>
            <div class="row" v-if="error">{{error}}</div>
            <div class="row">
                <div class="col-6">
                    <router-link to="/" class="btn btn-secondary">Volver</router-link>
                </div>
                <div class="col-6">
                    <button type="submit" class="btn btn-primary">Enviar</button> 
                </div>
                               
            </div>

        </form>
        </div>
        <div class="container" v-for="mensaje in mensajes" :key="mensaje.id">
            <div class="alert alert-primary mis-mensajes" role="alert" :class="{ 'otros-mensajes alert-secondary' : mensaje.uid != $store.state.usuarioLogueado.uid }">
                <small>{{mensaje.author}}</small><small>{{mensaje.date}}</small>
                <h6>{{mensaje.title}}</h6>
                <p>{{mensaje.body}}</p>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import moment from 'vue-moment';
import firebase from 'firebase';
//usamos la base datos
let db = firebase.database();
//referenciamos nuestra tabla entre comillas
//let mensajesRef = db.ref('mensajes');
export default {
    created(){
        this.moment = moment;
    },
    mounted(){
        let mensajesRef = db.ref('mensajes');
        mensajesRef.on('value', snapshot =>{
            const data = snapshot.val();
            let messages = [];
            if (data != null){
                Object.keys(data).forEach(key => {
                    messages.push({
                        id: key,
                        author: data[key].author,
                        body: data[key].body,
                        title: data[key].title,
                        uid: data[key].uid,
                        fecha: data[key].fecha   
                    })
                })                
            }

            this.mensajes = messages;
        })

        
    },
    data(){
        return {
            error: '',
            newMensaje: {
                author: firebase.auth().currentUser.email,
                uid: firebase.auth().currentUser.uid,
                body: '',
                title: '',
                fecha: new Date().toString()
            },
            mensajes: []

        }
    },
    methods:{
        postMessage(){
            //obtenemos el uid
            let mensajesRef = db.ref('mensajes');
            console.log(this.newMensaje);
            mensajesRef.push(this.newMensaje).then(() => {
                //console.log(message);
                //this.listadoMensajes.push(this.newMensaje);
                this.clearMessage();
            }).catch(error =>{
                console.log(error);
                this.error = error;
            });
        },
        clearMessage(){
            this.newMensaje.body = '';
            this.newMensaje.title = '';
        }
    }

}
</script>

<style scoped lang="sass">
.mis-mensajes
    float: left
    padding: 5px

.otros-mensajes
    float: right
    padding: 5px
</style>