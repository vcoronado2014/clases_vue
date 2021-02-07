<template>
  <div id="nav">
<!--     <router-link to="/">Home</router-link> |
    <router-link to="/Listado">Listado</router-link> 
    -->
<!--     <transition name="router-anim" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
        <router-view />
    </transition> -->
<router-view v-slot="{ Component }">
  <transition style="transition-delay: 0.5s" name="router-anim" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
    <component :is="Component" />
  </transition>
</router-view>
<!-- <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view> -->

  </div>
</template>

<style lang="sass">
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"

.back-header
  background-color: red

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding: 0
  margin: 0

#nav a
  font-weight: bold


#nav a.router-link-exact-active
  color: #42b983

.contenedores
  margin-top: 60px

.fade-transition
  transtion: all 1s ease
  opacity: 100

.fade-enter
  opacity: 0

.view-enter-active, .view-leave-active 
  transition: opacity .5s

.view-enter, .view-leave-to
  opacity: 0

.view-enter-to, .view-leave
  opacity: 1

</style>
