<script lang="ts">
  import Icon from "./Icon.svelte";
  import { stringtableVal, changeStringtable } from "../utils/stores";

  export let clickEvent = () => {};
  // export let filterEvent;
  export let condition;

  const changeSelection = (selection) => {
    let stringtable = $stringtableVal;
    const setSelected = (array) => {
      array.forEach((el, index) => {
        if (el.name == selection) {
          el.isSelected = true;
        } else {
          el.isSelected = false;
        }
      });
    };

    // Iterar
    stringtable.forEach((pkg, index) => {
      if (pkg.isSelected) {
        pkg.containers.forEach((cont, index) => {
          if (cont.name == selection) {
            cont.isSelected = true;
          } else {
            cont.isSelected = false;
          }
        });
      }
    });

    // Depois atualiza o store
    changeStringtable(stringtable);
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
        <span class="font-bold pl-1.5"> CONTAINER </span>
      </div>
    </a>
  </li>
  {#if condition}
    {#each $stringtableVal as pkg}
      {#if pkg.isSelected}
        {#each pkg.containers as cont}
          <a
            href={null}
            on:click={() => {
              changeSelection(cont.name);
            }}
          >
            <li class="px-3 py-2 menuItem">
              {cont.name}
            </li>
          </a>
        {/each}
      {/if}
    {/each}
  {/if}
</div>
