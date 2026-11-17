<script setup>
import { ref, onMounted } from 'vue'
import { experienciasApi } from '../services/api.js'

const experiencias = ref([])
const error = ref('')

onMounted(async () => {
  try {
    experiencias.value = await experienciasApi.listar()
  } catch (e) {
    error.value = e.message
  }
})
</script>

<template>
  <section class="formacion-simple">
    <div class="container">
      <h2>Experiencia profesional</h2>
      <p v-if="error">Error: {{ error }}</p>
      <div class="row g-4">
        <div class="col-md-6" v-for="exp in experiencias" :key="exp._id">
          <div class="estudios">
            <h3>{{ exp.cargo }}</h3>
            <p><strong>{{ exp.empresa }}</strong></p>
            <p>{{ exp.descripción }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>