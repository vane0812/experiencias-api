<script setup>
import Experiencias from '../components/Experiencias.vue'
</script>

<template>
  <section class="inicio">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="presentacion">
            <p class="etiqueta">PORTAFOLIO PERSONAL</p>
            <h2>Hola, soy Vanessa Madariaga</h2>
            <h3>Estudiante de Ingeniería de Software</h3>
            <p>
              Soy una estudiante interesada en la tecnología, el desarrollo de software y el aprendizaje de nuevas herramientas que me permitan seguir creciendo académica y profesionalmente.
            </p>
            <router-link to="/perfil" class="btn btn-primary boton-principal">
              Conocer más →
            </router-link>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <div class="foto-inicio">
            <img src="/img/foto.png.png" alt="Foto de Vanessa">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="informacion">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-6 col-lg-3">
          <div class="info-card">
            <h4>Carrera</h4>
            <p>Ingeniería de Software</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="info-card">
            <h4>Área de interés</h4>
            <p>Desarrollo de software</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="info-card">
            <h4>Actualmente</h4>
            <p>Estudiante</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="info-card">
            <h4>Mis intereses</h4>
            <p>Tecnología y programación</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Experiencias />
</template>