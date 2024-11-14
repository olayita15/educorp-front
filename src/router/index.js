import { createMemoryHistory, createRouter } from 'vue-router';

import coreRouter from "../modules/core/router";
import hackatonRouter from "../modules/hackaton/router";
import roadmapRouter from "../modules/roadmap/router";

const routes = [
  {
    ...coreRouter
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