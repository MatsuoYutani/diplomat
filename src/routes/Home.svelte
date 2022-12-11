<script lang="ts">
  import svelteLogo from "../assets/svelte.svg";
  import NavMenu from "../lib/NavMenu.svelte";
</script>

<main>
  <h1 id="title"><a href="/">📕 Diplomat</a></h1>

  <div class="card">
    <NavMenu />
  </div>

  <div class="card boxed">Aqui ficarão os projetos/arquivos recentes</div>
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
