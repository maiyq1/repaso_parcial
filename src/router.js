import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/components/home-component.vue";
import HealthcheckView from "@/components/healthcheck-component.vue";
import pagenotfoundComponent from "@/components/pagenotfound-component.vue";


const routes = [
    { path: "/", component: HomeView},
    { path: "/home", component: HomeView},
    { path: "/analytics/health-checks", component: HealthcheckView},
    { path: "/:pathMatch(.*)*", component: pagenotfoundComponent},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;