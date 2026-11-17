<script setup>
import { ref, onMounted } from 'vue'
import { experienciasApi } from '../services/api.js'

const vacio = () => ({
  cargo: '',
  empresa: '',
  fechaInicio: '',
  fechaFin: '',
  descripcion: '',
})

const experiencias = ref([])
const formulario = ref(vacio())
const editandoId = ref(null)
const mensaje = ref('')

function formatear(fecha) {
  if (!fecha) return ''
  return new Date(fecha).toLocaleDateString('es-CO', { month: 'short', year: 'numeric' })
}

async function cargar() {
  try {
    experiencias.value = await experienciasApi.listar()
  } catch (e) {
    mensaje.value = e.message
  }
}

function editar(exp) {
  editandoId.value = exp._id
  formulario.value = {
    cargo: exp.cargo,
    empresa: exp.empresa,
    fechaInicio: exp.fechaInicio?.slice(0, 10) ?? '',
    fechaFin: exp.fechaFin?.slice(0, 10) ?? '',
    descripcion: exp.descripcion ?? '',
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function cancelar() {
  editandoId.value = null
  formulario.value = vacio()
}

async function guardar() {
  const datos = {
    ...formulario.value,
    fechaFin: formulario.value.fechaFin || null,
  }
  try {
    if (editandoId.value) {
      await experienciasApi.actualizar(editandoId.value, datos)
      mensaje.value = 'Experiencia actualizada.'
    } else {
      await experienciasApi.crear(datos)
      mensaje.value = 'Experiencia creada.'
    }
    cancelar()
    await cargar()
  } catch (e) {
    mensaje.value = e.message
  }
}

async function eliminar(id) {
  if (!confirm('¿Seguro que deseas eliminar esta experiencia?')) return
  try {
    await experienciasApi.eliminar(id)
    mensaje.value = 'Experiencia eliminada.'
    await cargar()
  } catch (e) {
    mensaje.value = e.message
  }
}

onMounted(cargar)
</script>

<template>
  <section class="admin-page">
    <div class="container">

      <div class="admin-encabezado">
        <h2>Administración de experiencias</h2>
        <p>Crea, edita o elimina las experiencias que se muestran en tu hoja de vida.</p>
      </div>

      <p v-if="mensaje" class="mensaje-admin">{{ mensaje }}</p>

      <div class="admin-panel">
        <h3>{{ editandoId ? 'Editar experiencia' : 'Nueva experiencia' }}</h3>

        <form @submit.prevent="guardar">
          <div class="row g-4">
            <div class="col-md-6">
              <label class="form-label" for="cargo">Cargo</label>
              <input id="cargo" class="form-control" v-model="formulario.cargo" required>
            </div>

            <div class="col-md-6">
              <label class="form-label" for="empresa">Empresa</label>
              <input id="empresa" class="form-control" v-model="formulario.empresa" required>
            </div>

            <div class="col-md-6">
              <label class="form-label" for="fechaInicio">Fecha de inicio</label>
              <input id="fechaInicio" type="date" class="form-control" v-model="formulario.fechaInicio" required>
            </div>

            <div class="col-md-6">
              <label class="form-label" for="fechaFin">Fecha de fin</label>
              <input id="fechaFin" type="date" class="form-control" v-model="formulario.fechaFin">
              <div class="form-text">Déjala vacía si es tu trabajo actual.</div>
            </div>

            <div class="col-12">
              <label class="form-label" for="descripcion">Descripción</label>
              <textarea id="descripcion" class="form-control" rows="4"
                v-model="formulario.descripcion" required></textarea>
            </div>
          </div>

          <div class="admin-acciones-form">
            <button type="submit" class="btn btn-primary boton-principal">
              {{ editandoId ? 'Guardar cambios' : 'Crear experiencia' }}
            </button>
            <button v-if="editandoId" type="button" class="btn-secundario" @click="cancelar">
              Cancelar
            </button>
          </div>
        </form>
      </div>

      <div class="admin-lista">
        <h3>Experiencias registradas</h3>

        <p v-if="experiencias.length === 0" class="admin-item-meta">
          Aún no hay experiencias registradas.
        </p>

        <div v-for="exp in experiencias" :key="exp._id" class="admin-item">
          <div>
            <strong>{{ exp.cargo }}</strong>
            <div class="admin-item-meta">
              {{ exp.empresa }} · {{ formatear(exp.fechaInicio) }} –
              {{ exp.fechaFin ? formatear(exp.fechaFin) : 'Actualidad' }}
            </div>
          </div>

          <div class="admin-acciones">
            <button class="btn-secundario" @click="editar(exp)">Editar</button>
            <button class="btn-peligro" @click="eliminar(exp._id)">Eliminar</button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>