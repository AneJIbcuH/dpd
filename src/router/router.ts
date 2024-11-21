import { createRouter, createWebHistory} from 'vue-router';

export enum AppRouts {
    HOME = "/",
    END = "/end",
    QUEST = "/quest",
 }

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
          path: AppRouts.HOME,
          component: () => import("../pages/Home/Home.vue"),
       },
       {
          path: AppRouts.END,
          component: () => import("../pages/End/End.vue"),
       },
       {
        path: AppRouts.QUEST,
        component: () => import("../pages/Quest/Quest.vue"),
       },
    ],
 });
 
 export default router;