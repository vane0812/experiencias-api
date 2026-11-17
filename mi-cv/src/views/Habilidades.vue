<script setup>
const habilidades = [
  'Programación',
  'Desarrollo web',
  'Bases de datos',
  'Trabajo en equipo',
  'Ingeniería de software',
]
</script>

<template>
  <section class="habilidades-simple">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-md-6">
          <div class="habilidades-imagen">
            <img src="/img/habilidades.png" alt="Habilidades">
          </div>
        </div>
        <div class="col-md-6">
          <div class="habilidades-texto">
            <h2>Mis habilidades</h2>
            <p>
              Durante mi formación académica he desarrollado conocimientos e interés en diferentes áreas relacionadas con la tecnología.
            </p>
            <ul>
              <li v-for="h in habilidades" :key="h">{{ h }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>