import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import FilmesView from "@/views/FilmesView.vue";
import FilmeView from "@/views/FilmeView.vue";
import ArtistasView from "@/views/ArtistasView.vue";
import SeriesView from "@/views/SeriesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/filmes/:id",
      nome: "filme",
      component: FilmeView,
      props: true,
    },
    {
      path: "/filmes",
      name: "filmes",
      component: FilmesView,
    },
    {
      path: "/series",
      name: "series",
      component: SeriesView,
    },
    {
      path: "/artistas",
      name: "artistas",
      component: ArtistasView,
    }
  ],
});

export default router;
