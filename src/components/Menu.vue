<template>
<div id="menu">
        <nav class="navbar navbar-dark bg-primary">
                
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-top">
            Bienvenidos a mi APP
            </a>
            
            <button type="button"  class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <span class="navbar-toggler-icon" ></span>
            </button>
                
            <ul class="dropdown-menu dropdown-menu-end">
                
                <li><router-link class="dropdown-item" to="/">Home</router-link></li>
                <li><router-link class="dropdown-item" to="/Listado">Listado</router-link></li>  

            </ul> 
               
        </nav>
        
</div>
</template>

<script>
export default {
    name: 'MenuBar',
} 
</script>

<style scoped lang='sass'>

</style>