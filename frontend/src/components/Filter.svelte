<script lang="ts">
  import Icon from "./Icon.svelte";
  import { stringtableVal, changeStringtable } from "../utils/stores";

  export let clickEvent = () => {};
  // export let filterEvent;
  export let condition;
  export let category;

  const changeSelection = (category, selection) => {
    console.log(`Changing ${category} to ${selection}`);

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
    stringtable.forEach((el, index) => {
      if (category == "package") {
        setSelected(stringtable);
      } else if (category == "container" && el.isSelected) {
        setSelected(el.containers);
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
        <span class="font-bold pl-1.5">
          <slot />
        </span>
      </div>
    </a>
  </li>
  {#if condition}
    {#each $stringtableVal as pkg}
      {#if category == "package"}
        <a
          href={null}
          on:click={() => {
            changeSelection(category, pkg.name);
          }}
        >
          <li class="px-3 py-2 menuItem">
            {pkg.name}
          </li>
        </a>
      {:else if category == "container" && pkg.isSelected}
        {#each pkg.containers as cont}
          <a
            href={null}
            on:click={() => {
              changeSelection(category, cont.name);
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
