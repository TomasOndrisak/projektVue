<template>
   <div class="container nav nav-tabs justify-content-center">
 <nav class="navbar navbar-expand navbar-light">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link h4" to="/Zamestnanci">Zoznam aktuálnych zamestnancov</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link h4" to="/Archivovany">Zoznam predošlých zamestnancov</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link h4" to="/Pozicie">Zoznam pozícií vo firme</router-link>
      </li>
     
    </ul>
  </div>
</nav>
</div><router-view/>
</template>

<script>
export default {

}
</script>

<style>

</style>