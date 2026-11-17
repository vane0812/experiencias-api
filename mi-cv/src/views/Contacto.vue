<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ nombre: '', correo: '', asunto: '', mensaje: '' })
const errores = reactive({ nombre: '', correo: '', asunto: '', mensaje: '' })
const exito = ref('')

const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validar() {
  const nombre = form.nombre.trim()
  const correo = form.correo.trim()
  const asunto = form.asunto.trim()
  const mensaje = form.mensaje.trim()

  errores.nombre = nombre === '' ? 'Por favor, ingresa tu nombre.' : ''

  if (correo === '') {
    errores.correo = 'Por favor, ingresa tu correo.'
  } else if (!formatoCorreo.test(correo)) {
    errores.correo = 'Ingresa un correo electrónico válido.'
  } else {
    errores.correo = ''
  }

  errores.asunto = asunto === '' ? 'Por favor, ingresa un asunto.' : ''
  errores.mensaje = mensaje === '' ? 'Por favor, escribe un mensaje.' : ''

  return !errores.nombre && !errores.correo && !errores.asunto && !errores.mensaje
}

function enviar() {
  exito.value = ''
  if (!validar()) return

  exito.value = 'Formulario enviado correctamente.'
  Object.assign(form, { nombre: '', correo: '', asunto: '', mensaje: '' })
}
</script>

<template>
  <section class="contacto-simple">
    <div class="container">
      <h2>Información de contacto</h2>

      <div class="row g-5">
        <div class="col-md-5">
          <div class="datos-contacto">
            <p>
              <strong>Nombre:</strong><br>
              Vanessa Alexandra Madariaga Noriega
            </p>
            <p>
              <strong>Correo electrónico:</strong><br>
              madariaganoriegav@gmail.com
            </p>
            <p>
              <strong>Teléfono:</strong><br>
              +57 300 120 2356
            </p>
          </div>
        </div>

        <div class="col-md-7">
          <div class="formulario-contacto">
            <h3>Envíame un mensaje</h3>

            <form @submit.prevent="enviar">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre completo</label>
                <input type="text" class="form-control" id="nombre" v-model="form.nombre">
                <div class="mensaje-error">{{ errores.nombre }}</div>
              </div>

              <div class="mb-3">
                <label for="correo" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" id="correo" v-model="form.correo">
                <div class="mensaje-error">{{ errores.correo }}</div>
              </div>

              <div class="mb-3">
                <label for="asunto" class="form-label">Asunto</label>
                <input type="text" class="form-control" id="asunto" v-model="form.asunto">
                <div class="mensaje-error">{{ errores.asunto }}</div>
              </div>

              <div class="mb-3">
                <label for="mensaje" class="form-label">Mensaje</label>
                <textarea class="form-control" id="mensaje" rows="5" v-model="form.mensaje"></textarea>
                <div class="mensaje-error">{{ errores.mensaje }}</div>
              </div>

              <button type="submit" class="btn btn-primary boton-principal">
                Enviar mensaje
              </button>

              <div class="mensaje-exito">{{ exito }}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>