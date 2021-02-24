<template>
  <div id="container-login">
      <div class="container">
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="login">
                    <h5 class="card-title">Ingrese sus credenciales</h5>
                    <div class="mb-3">
                        <label for="inputEmail" class="form-label">Correo electrónico</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="ejemplo@xxx.xx" v-model="email">
                    </div>
                    <div class="mb-3">
                        <label for="inputPassword" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="inputPassword" placeholder="tu password" v-model="password">
                    </div>
                    <div v-if="error" class="row">
                        <div class="alert alert-danger" role="alert">
                            {{error}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <router-link to="/" class="btn btn-secondary">Volver</router-link>
                        </div>
                        <div class="col">
                            <button type="submit" class="btn btn-primary">Ingresar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import firebase from 'firebase';
import '@/firebase/init';
export default {
    data(){
        return{
            email: '',
            password: '',
            error: null
        }
    },
    methods:{
        login(){
            if (this.email && this.password){
                //esta todo bien
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(user =>{
                    //el usuario existe
                    console.log(user);
                    //cambiar el state mediante dispatch
                    this.$store.dispatch('setUserAction', user);
                    //vamos a dirigirnos a la pagina home
                    this.$router.push("/");
                }).catch(error => {
                    console.log(error);
                    this.error = error.message;
                })
            }
            else{
                console.log('faltan datos requeridos');
            }
        }
    }
}
</script>

<style scoped lang="sass">
.container
    margin-top: 70px
</style>