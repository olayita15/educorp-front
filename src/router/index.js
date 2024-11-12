import { createMemoryHistory, createRouter } from 'vue-router';

import homeRouter from "../modules/home/router";
import hackatonRouter from "../modules/hackaton/router";
import roadmapRouter from "../modules/roadmap/router";

const routes = [
  {
    ...homeRouter
  },
  {
    ...hackatonRouter
  },
  {
    ...roadmapRouter
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;