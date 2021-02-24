<template>
<div id="menu">
        <nav class="navbar navbar-dark bg-primary">
                
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-top">
                {{getTitle()}}
            </a>
            
            <button type="button"  class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <span class="navbar-toggler-icon" ></span>
            </button>
                
            <ul class="dropdown-menu dropdown-menu-end">
                
                <li><router-link class="dropdown-item" to="/">Home</router-link></li>
                <li><router-link class="dropdown-item" to="/Listado">Listado</router-link></li>
                <li><router-link class="dropdown-item" to="/Mensajes">Muro</router-link></li>  
                <div v-if="$store.getters.isLoguedIn">
                    <li><a class="dropdown-item" href="#" @click.prevent="logout">Logout</a></li>
                </div>
                <!-- si no esta logueado-->
                <div v-else>
                    <li><a class="dropdown-item" href="#" @click.prevent="login">Login</a></li>
                </div>
            </ul> 
        </nav>
        
</div>
</template>

<script>
import firebase from 'firebase';
import '@/firebase/init';
export default {
    name: 'MenuBar',
    props:{
        titulo: String
    },
    methods:{
        getTitle(){
            return this.$props.titulo  ? this.$props.titulo : "Bienvenidos"
        },
        login(){
            this.$router.push('/Login');
        },
        logout(){
            console.log('logout');
            firebase.auth().signOut().then(()=>{
                //aca ya estamos deslogueados
                this.$store.dispatch('setUserAction', null);
            })
        }
    }
} 
</script>

<style scoped lang='sass'>

</style>