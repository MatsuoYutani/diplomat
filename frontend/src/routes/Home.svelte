<script lang="ts">
  import Sidebar from "../pages/Sidebar.svelte";
  import About from "../pages/About.svelte";

  export let menu: {
    name: string;
    iconModel: string;
    path: string;
  }[];
</script>

<div id="layout" class="flex font-sans max-h-screen">
  <Sidebar {menu} />
  <About />
</div>
