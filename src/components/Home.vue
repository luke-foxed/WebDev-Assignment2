<template>
  <div class="hero">
    <div class="hometitle">
      <h1 class="vue-title">WELCOME TO TECH COMP</h1>
    </div>

    <br>
    <div>
      <b-card-group deck class="deck">
        <b-card title="create."
                img-src="https://i.imgur.com/p1UZapd.png"
                img-alt="Img"
                img-top>
          <p class="card-text">
            Create user accounts as well as devices, each with their own unique specs!
          </p>
          <div slot="footer">
            <small class="text-muted">*--*</small>
          </div>
        </b-card>
        <b-card title="update."
                img-src="https://i.imgur.com/yyooRMl.png"
                img-alt="Img"
                img-top>
          <p class="card-text">
            Got something wrong? Wrong name or maybe incorrect specs? Easily update any device as you need!
          </p>
          <div slot="footer">
            <small class="text-muted">*--*</small>
          </div>
        </b-card>
        <b-card title="delete."
                img-src="https://i.imgur.com/eAUsGu3.png"
                img-alt="Img"
                img-top>
          <p class="card-text">
            Delete the devices or users that you want out of the database!
          </p>
          <div slot="footer">
            <small class="text-muted">*--*</small>
          </div>
        </b-card>
      </b-card-group>
    </div>
    <br>
    <p id="author">BY LUKE FOX</p>
  </div>
</template>

<style>
  #author {
    color: #fb9919;
    font: bold 15px arial;
    margin-top: 20px;
  }
  .hero {
    margin-top: 150px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
    color: black;
  }

  app1 {
    width: 60%;
    margin: 0 auto;
  }

  .hometitle h1 {
    font: bold 100px arial, sans-serif;
    background-color: #565656;
    color: transparent;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
  }

  .vue-title {
    font: bold 100px arial, sans-serif;
    text-transform: uppercase;
    color: #fb9919;
  }

  vue-title.shadow {

  }

  .deck {
    width: 50%;
    margin: auto;
  }

</style>
