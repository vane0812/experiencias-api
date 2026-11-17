import { createRouter, createWebHistory } from 'vue-router'
import CV from '../views/CV.vue'
import Perfil from '../views/Perfil.vue'
import Formacion from '../views/Formacion.vue'
import Habilidades from '../views/Habilidades.vue'
import Contacto from '../views/Contacto.vue'
import Admin from '../views/Admin.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: CV },
    { path: '/perfil', component: Perfil },
    { path: '/formacion', component: Formacion },
    { path: '/habilidades', component: Habilidades },
    { path: '/contacto', component: Contacto },
    { path: '/admin', component: Admin },
  ],
})