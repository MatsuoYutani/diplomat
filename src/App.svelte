<script>
  import { Router, Route } from "svelte-routing";
  import { routes } from "./routes/routes.js";

  import Footer from "./lib/Footer.svelte";
</script>

<Router>
  {#each routes as { name, pattern, component }}
    <Route path={pattern} {component} />
  {/each}
  <Footer />
</Router>
