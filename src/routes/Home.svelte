<script lang="ts">
  import svelteLogo from "../assets/svelte.svg";
  import NavMenu from "../lib/NavMenu.svelte";

  // const showCreateFileDialog = () => {
  //   console.log("Called from child!");
  // };
</script>

<main>
  <div class="card">
    <h1 id="title"><a href="/">📕 Diplomat</a></h1>
    <NavMenu />
    <div class="card boxed">Aqui ficarão os projetos/arquivos recentes</div>
  </div>
</main>

<style>
  h1#title > a {
    text-decoration: none;
    color: white;
  }

  div.boxed {
    border: 3px solid #1a1a1a;
    background-color: #1a1a1a;
    border-radius: 8px;
  }
</style>
