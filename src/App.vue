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
    <b-navbar toggleable="md" variant="dark" fixed="top" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/tech.png" class="img-circle" style="padding: 10px" width="70" height="70">
      <b-navbar-brand to="/">TECHCOMP</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"></i>HOME</b-nav-item>
          <b-nav-item to="/devices"><i class="fa fa-laptop" style="padding: 5px"></i>MANAGE DEVICES</b-nav-item>
          <b-nav-item to="/add"><i class="fa fa-plus-square " style="padding: 5px"></i>ADD DEVICE</b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px"></i>MAP</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px"></i>ABOUT US</b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px"></i>CONTACT US</b-nav-item>
          <b-nav-item to="/login"><i class="fa fa-sign-in" style="padding: 5px"></i>LOGIN</b-nav-item>
          <b-nav-item to="/logout"><i class="fa fa-sign-out" style="padding: 5px"></i>LOGOUT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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

</style>
