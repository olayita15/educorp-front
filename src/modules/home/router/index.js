
export default {
  path: "/",
  name:'homeLayout',
  component: () => import("@/modules/home/layouts/generalLayout.vue"),
  children:[
    {
      path:'/',
      name: "home",
      component: () => import("@/modules/home/views/principal.vue")
    },
  ]
};