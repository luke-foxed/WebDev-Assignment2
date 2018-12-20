<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <vue-typer class="typer"
               :text='["This app was made using the MEVN stack for Web App Development 2. The code used in this app has been sourced from the following:","","David Drohan, VueParticles, VueTyper, VueAnime and VueBurger Menu"]'
               :repeat='Infinity'
               :shuffle='false'
               initial-action='typing'
               :pre-type-delay='70'
               :type-delay='35'
               :pre-erase-delay='2000'
               :erase-delay='15'
               erase-style='backspace'
               :erase-on-complete='false'
               caret-animation='smooth'
    ></vue-typer>
    <br><br>
    <b-card bg-variant="light"
            text-variant="black"
            header="CONTACT INFO"
            class="text-center">
      <p class="card-text">
        LUKE FOX<br>
        20076173<br>
        LUKEFOX5@GMAIL.COM</p>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      messagetitle: ' About '
    }
  }
}
</script>

<style scoped>

  .hero {
    width: 50%;
    margin: auto;
    margin-top: 150px;
  }

  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .vue-typer {
    font-family: "Century Gothic";
    font-size: 20px;
    text-transform: uppercase;
  }

</style>
