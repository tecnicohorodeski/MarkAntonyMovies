import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import FilmesView from "@/views/FilmesView.vue";
import FilmeUnicView from "@/views/FilmeUnicView.vue";
import SerieUnicView from "@/views/SerieUnicView.vue";
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
      path: "/filmaco/:id",
      nome: "filmaco",
      component: FilmeUnicView,
      props: true,
    },
    {
      path: "/seriado/:id",
      nome: "seriado",
      component: SerieUnicView,
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
