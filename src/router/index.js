import { createRouter, createWebHistory } from 'vue-router'
import ZamestnanciViewVue from '../views/ZamestnanciView.vue'
import ArchivovanyView from '../views/ArchivovanyView.vue'
import PozicieView from '../views/PozicieView.vue'
import VytvoritView from '../views/VytvoritView.vue'
import VytvoritPoziciuView from '../views/VytvoritPoziciuView.vue'
import editUser from '../views/editUser.vue'
import DetailView from '../views/DetailView.vue'
import ArchivovanyDetailView from '../views/ArchivovanyDetailView.vue'
const routes = [
  {
    path: '/',
    name: 'Zamestnanci',
    component: ZamestnanciViewVue
  },
  {
    path: '/Zamestnanci',
    name: 'zamestnanci',
    component: ZamestnanciViewVue
  },
  {
    path: '/Pozicie',
    name: 'Pozicie',
    component: PozicieView
  },
  {
    path: '/Vytvorit',
    name: 'Vytvorit',
    component: VytvoritView
  },
  
  {
    path: '/Vytvoritpoziciu',
    name: 'VytvoritPoziciu',
    component: VytvoritPoziciuView
  },
  
  {
    path: '/edit/:id',
    name: 'edit',
    component: editUser
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView
  },
  // {
  //   path: '/detailarchivovany/:id',
  //   name: 'archivovanydetail',
  //   component: ArchivovanyDetailView
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
