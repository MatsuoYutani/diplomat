<script>
  import { Router, Route } from "svelte-routing";
  // import { routes } from "./routes/routes.js";

  import HomePage from "./routes/Home.svelte";
  import EditPage from "./routes/Edit.svelte";
</script>

<Router>
  <!-- {#each routes as { name, pattern, component }}
    <Route path={pattern} {component} />
  {/each} -->
  <Route path="/" component={HomePage} />
  <Route path="/edit" component={EditPage} />
</Router>
