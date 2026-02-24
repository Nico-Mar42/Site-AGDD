import Home from '../components/page/home.vue'
import Presentation from '../components/page/Association/Presentation.vue'
import Agenda from '../components/page/Association/Agenda.vue'
import Contact from '../components/page/Association/Contact.vue'
import Reseaux from '../components/page/Association/Reseaux.vue'
import Global from '../components/page/Twitch/Global.vue'
import Dragons from '../components/page/Twitch/actual_play/dragons/Dragons.vue'
import Cyberpunk from '../components/page/Twitch/actual_play/cyberpunk/Cyberpunk.vue'
import terra from '../components/page/Twitch/actual_play/terra_nova/Terra_nova.vue'
import { createRouter, createWebHashHistory } from 'vue-router' // Changez createWebHistory par createWebHashHistory


// ... autres imports de pages
const routes = [
  { path: '/', component: Home },
  { path: '/association', component: Presentation },
  { path: '/association/agenda', component: Agenda },
  { path: '/association/contact', component: Contact },
  { path: '/association/reseaux', component: Reseaux },
  { path: '/twitch/', component: Global },
  { path: '/twitch/dragons', component: Dragons },
  { path: '/twitch/cyberpunk', component: Cyberpunk },
  { path: '/twitch/terra-nova', component: terra },
  // ... autres pages
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router