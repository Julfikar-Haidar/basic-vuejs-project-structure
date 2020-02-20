<template>
      <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="index.html">Start Bootstrap</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
             <router-link :to="{ name: 'Home' }" class="nav-link">
         Home
      </router-link>
          </li>
          <li class="nav-item">
<!--            <a class="nav-link" href="about.html">About</a>-->
            <router-link :to="{ name: 'About' }" class="nav-link">
         ABOUT
      </router-link>
          </li>
          <li class="nav-item">

            <router-link :to="{ name: 'Sample' }" class="nav-link">
         SAMPLE
      </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Contact' }" class="nav-link">
         CONTACT
      </router-link>

          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>

</style>