<template>
  <div id="app">
    <div id="particles">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    </div>
    <template>

      <Slide>
        <li><router-link to="/#" exact><a class="fa fa-home"> HOME</a></router-link></li>
        <li><router-link to="/devices"><a class="fa fa-laptop"> DEVICES</a></router-link></li>
        <li><router-link to="/users"><a class="fa fa-users"> USERS</a></router-link></li>
        <li><router-link to="/add"><a class="fa fa-plus-square"> ADD DEVICES</a></router-link></li>
        <li><router-link to="/create"><a class="fa fa-user"> CREATE ACCOUNT</a></router-link></li>
      </Slide>
    </template>

    <router-view/>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu' // import the CSS transitions you wish to use, in this case we are using `Slide`
export default {
  name: 'App',
  components: {
    Slide // Register your component
  }
}
</script>

<style>
 .items:link{
   color: red;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    padding-top: 20px;
  }

  .VueTables__sortable {
    cursor: pointer;
  }
  #particles
 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -20;
  }

 li a {
   text-decoration: none;
   color: white;
 }

 li a:hover {
   text-decoration: none;
   color: orange;
   -webkit-transform: scale(1.3);
   -ms-transform: scale(1.3);
   transform: scale(1.1);
 }
 .active {
   color: white;
 }

</style>
