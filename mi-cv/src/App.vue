<template>
  <header>
    <h1>Mi Hoja de Vida</h1>
    <p>Portafolio personal</p>
  </header>

  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        Mi Hoja de Vida
      </router-link>

      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menuNavegacion">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menuNavegacion">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/perfil">Perfil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/formacion">Formación</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/habilidades">Habilidades</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/contacto">Contacto</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/admin">Administración</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main>
    <router-view />
  </main>

  <footer>
    <p>Mi Hoja de Vida © 2026</p>
  </footer>
</template>