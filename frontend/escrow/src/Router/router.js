import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../buyer";
import LoginView from "../seller";
import PurchaseView from "../App";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/login',
            component: LoginView
        },
        {
            path: '/Purchase',
            component: PurchaseView
        },
    ],
});

export default router;