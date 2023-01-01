<script lang="ts">
  import { projectName, containerSelected as contsel, stringtableHTML as htmlhtm } from "../utils/editFile";
  import { languages } from "../utils/languages";
  import { Link } from "svelte-routing";
  import Icon from "../components/Icon.svelte";
  import FilterPackage from "../components/FilterPackage.svelte";
  import FilterContainer from "../components/FilterContainer.svelte";
  import FilterLanguage from "../components/FilterLanguage.svelte";

  let isContainerEnabled = true;

  export let menus;

  const toggle = (element: string) => {
    menus[element] = !menus[element];
  };
</script>

<nav id="menu" class="pt-2 min-h-screen w-52 max-w-1/4 text-white">
  <h1 class="text-2xl text-white py-3 px-3 inline-flex pb-5">
    <Link to="/"><Icon model="menu" /></Link>
    <span class="inline-flex">DIPLOMAT</span>
  </h1>
  {#if menus.sidebar}
    <ul>
      <li class="text-lg w-full font-bold text-center menuField">PROJETO</li>
      <li class="px-3 py-2">
        <!-- TODO Clique para renomear projeto -->
        <a href={null}>{projectName}</a>
      </li>
      <li class="px-3 py-2 menuField">
        <a href={null}>VOLTAR</a>
      </li>

      <FilterPackage
        condition={menus.packages}
        clickEvent={() => {
          toggle("packages");
        }}
      />

      {#if isContainerEnabled}
        <FilterContainer
          condition={menus.containers}
          clickEvent={() => {
            toggle("containers");
          }}
        />
      {/if}
      <FilterLanguage
        condition={menus.languages}
        clickEvent={() => {
          toggle("languages");
        }}
      />
    </ul>

    <Link to="/">
      <button class="primary-button pure-button">Voltar</button>
    </Link>
    <button
      class="primary-button pure-button"
      on:click={() => {
        toggle("sidebar");
      }}>MENU</button
    >
  {/if}
</nav>
