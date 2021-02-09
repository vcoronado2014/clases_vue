<template>
  <div id="container-login" class="container">
    <div class="card mt-5">
        <div class="card-body">
        <form @submit.prevent="login">
            <h5 class="card-title">Ingrese sus credenciales de acceso</h5>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div class="row" v-if="error">{{error}}</div>
            <div class="row">
                <div class="col-6">
                    <router-link to="/" class="btn btn-secondary">Volver</router-link>
                </div>
                <div class="col-6">
                    <button type="submit" class="btn btn-primary">Ingresar</button> 
                </div>
                               
            </div>

        </form>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import '@/firebase/init';
export default {
    data(){
        return {
            email: '',
            password:'',
            error: ''
        }
    },
    methods: {
        login(){
            console.log('accder');
            if (this.email && this.password){
                //aca enviamos formulario
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(user =>{
                    //aca nos devuelve el usuario
                    console.log(user);
                    this.$router.push({ name: 'LeerMensajes'});
                }).catch(error => {
                    console.log(error.message);
                })
            }
            else{
                this.error = "Los campos son requeridos";
            }
        }
    }

}
</script>

<style>

</style>