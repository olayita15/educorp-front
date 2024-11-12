
export default {
  path: "/hackaton",
  name:'hackatonLayout',
  component: () => import("@/modules/hackaton/layouts/generalLayout.vue"),
  children:[
    {
      path:'/hackaton',
      name: "hackaton",
      component: () => import("@/modules/hackaton/views/principal.vue")
    },
  ]
};