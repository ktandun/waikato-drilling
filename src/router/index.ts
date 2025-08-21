import LandingPage from '@/views/LandingPage.vue'
import ContactPage from '@/views/ContactPage.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
]

// const router = createRouter({
//   history: createWebHashHistory(import.meta.env.BASE_URL),
//   routes: routes,
//   scrollBehavior() {
//     return { top: 0, left: 0 }
//   },
// })
// export default router
