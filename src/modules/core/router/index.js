
export default {
  path: "/",
  name: 'coreLayout',
  component: () => import("@/modules/core/layouts/generalLayout.vue"),
  children: [
    {
      path: '/',
      name: "core",
      component: () => import("@/modules/core/views/principal.vue")
    },
  ]
};