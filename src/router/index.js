import Home from '../components/page/home.vue'
import Presentation from '../components/page/Association/Presentation.vue'
import Agenda from '../components/page/Association/Agenda.vue'
import Contact from '../components/page/Association/Contact.vue'
import Reseaux from '../components/page/Association/Reseaux.vue'
import Global from '../components/page/Twitch/Global.vue'
import Dragons from '../components/page/Twitch/actual_play/dragons/Dragons.vue'
import Cyberpunk from '../components/page/Twitch/actual_play/cyberpunk/Cyberpunk.vue'
import terra from '../components/page/Twitch/actual_play/terra_nova/Terra_nova.vue'

// CORRECTION : Importe createWebHistory au lieu de createWebHashHistory
import { createRouter, createWebHistory } from 'vue-router' 

const routes = [
  { 
    path: '/',
    component: Home,
    meta: { title: 'Accueil - Au Gré des Dés' } 
  },
  { 
    path: '/association',
    component: Presentation,
    meta: { title: 'Association - Au Gré des Dés' } 
  },
  { 
    path: '/association/agenda',
    component: Agenda,
    meta: { title: 'Agenda - Au Gré des Dés' } 
  },
  { 
    path: '/association/contact',
    component: Contact,
    meta: { title: 'Contact - Au Gré des Dés' } 
  },
  { 
    path: '/association/reseaux',
    component: Reseaux,
    meta: { title: 'Réseaux - Au Gré des Dés' } 
  },
  { 
    path: '/twitch', // Note : J'ai enlevé le "/" final pour plus de propreté
    component: Global,
    meta: { title: 'Twitch - Au Gré des Dés' } 
  },
  { 
    path: '/twitch/dragons',
    component: Dragons,
    meta: { title: 'Dragons - Au Gré des Dés' } 
  },
  { 
    path: '/twitch/cyberpunk',
    component: Cyberpunk,
    meta: { title: 'Cyberpunk - Au Gré des Dés' } 
  },
  { 
    path: '/twitch/terra-nova',
    component: terra,
    meta: { title: 'Terra Nova - Au Gré des Dés' } 
  }
]

const router = createRouter({
  // CORRECTION : Utilise createWebHistory() sans le hash #
  history: createWebHistory(),
  routes
})

// Mise à jour automatique du titre de l'onglet
router.afterEach((to) => {
  const title = to.meta.title || 'Au Gré Des Dés';
  document.title = title;
});

export default router