<script>
import { RouterLink } from 'vue-router';
export default{
    name: 'Navbar',
    components:{
        RouterLink
    }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">ENapló</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/">Főoldal</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/students">Tanulók</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/grades">Jegyek</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/addgrade">Jegyek Hozzáadása</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style>

</style>