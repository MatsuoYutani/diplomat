<script lang="ts">
  import Icon from "./Icon.svelte";
  import { languageFilter, changeLanguageFilter } from "../utils/stores";
  // import { Languages } from "../utils/Interfaces";
  // export let filterEvent;

  export let clickEvent;
  export let condition;

  const toggleLanguage = (lang: string) => {
    let languages = $languageFilter;

    let index = languages.findIndex((el) => {
      return el.className == lang;
    });

    languages[index].enabled = !languages[index].enabled;

    // Depois atualiza o store
    changeLanguageFilter(languages);
  };
</script>

<div>
  <li>
    <a href={null} on:click={clickEvent}>
      <div class="menuField text-lg leading-loose inline-flex menuItem w-full pl-3">
        <span class="pt-0.5">
          {#if condition}
            <Icon model="arrow-down" />
          {:else}
            <Icon model="arrow-right" />
          {/if}
        </span>
        <span class="font-bold pl-1.5"> IDIOMAS </span>
      </div>
    </a>
  </li>
  {#if condition}
    {#each $languageFilter as lang}
      <a
        href={null}
        on:click={() => {
          toggleLanguage(lang.className);
        }}
      >
        <li class="px-3 py-2 menuItem">
          <input id={lang.className} type="checkbox" bind:checked={lang.enabled} />
          {lang.className}
        </li>
      </a>
    {/each}
  {/if}
</div>
