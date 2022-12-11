import HomePage from "./Home.svelte";
import EditPage from "./Edit.svelte";

export const routes = [
  {
    name: "home",
    pattern: "/",
    component: HomePage,
  },
  {
    name: "about",
    pattern: "/edit",
    component: EditPage,
  },
];
