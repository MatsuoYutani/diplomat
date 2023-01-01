<script lang="ts">
  import { onMount } from "svelte";
  import { Router, Route } from "svelte-routing";
  // import { routes } from "./routes/routes.js";

  import HomePage from "./routes/Home.svelte";
  import EditPage from "./routes/Edit.svelte";
  import NewProject from "./routes/New.svelte";

  let menuItems = [
    {
      name: "INÍCIO",
      iconModel: "home",
      path: "/",
    },
    {
      name: "NOVO PROJETO",
      iconModel: "new",
      path: "/new",
    },
    {
      name: "ABRIR PROJETO",
      iconModel: "open",
      path: "/open",
    },
    {
      name: "DEBUG",
      iconModel: "debug",
      path: "/edit",
    },
    {
      name: "CONFIGURAÇÕES",
      iconModel: "config",
      path: "/config",
    },
    {
      name: "REPORTAR BUG",
      iconModel: "report",
      path: "/report",
    },
  ];
</script>

<Router>
  <!-- {#each routes as { name, pattern, component }}
      <Route path={pattern} {component} />
    {/each} -->
  <Route path="/"><HomePage menu={menuItems} /></Route>
  <Route path="/new"><NewProject menu={menuItems} /></Route>
  <Route path="/edit"><EditPage /></Route>
</Router>

<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>
