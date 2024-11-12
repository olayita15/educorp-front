
export default {
  path: "/roadmap",
  name:'roadmapLayout',
  component: () => import("@/modules/roadmap/layouts/generalLayout.vue"),
  children:[
    {
      path:'/roadmap',
      name: "roadmap",
      component: () => import("@/modules/roadmap/views/principal.vue")
    },
  ]
};