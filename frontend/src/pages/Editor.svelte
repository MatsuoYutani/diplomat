<script lang="ts">
  import ModalEdit from "../components/ModalEdit.svelte";
  import { languages } from "../utils/languages";

  import { stringtableVal, changeStringtable, languageFilter } from "../utils/stores";
  let stringtable = $stringtableVal;

  // let packageSelected = pkgsel;
  // let containerSelected = contsel;
  // let stringtableHTML = htmlhtm;

  let langs = languages;
  export let menus;

  const toggleEdit = (cell: Cell) => {
    console.log(cell);
    menus.modalEdit = !menus.modalEdit;
  };
</script>

{#if menus.modalEdit}
  <ModalEdit />
{/if}
<div class="mx-auto">
  <!-- ! DEPENDE DO CONTAINER SELECIONADO -->
  <table class="min-w-full">
    <thead class="border-b">
      <!-- Linha do Cabeçalho / Idiomas -->
      <tr>
        <th class="text-sm font-extrabold text-gray-100 px-6 py-4 text-left"> Tag </th>
        {#each $languageFilter as lang}
          {#if lang.enabled}
            <th class="text-sm font-extrabold text-gray-100 px-6 py-4 text-left">
              {lang.className}
            </th>
          {/if}
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each stringtable as _table}
        {#each _table.containers as _cont}
          {#each _cont.keys as _key}
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-100 {_key.name}">{_key.name}</td>
              {#each $languageFilter as _lang}
                {#if _lang.enabled}
                  <td>
                    <a
                      class="text-sm text-gray-100 font-medium px-6 py-4 whitespace-nowrap stringCell {_key.name} block"
                      href={null}
                      on:click={() => {
                        toggleEdit({ language: _lang.className, tag: _key.name });
                      }}
                    >
                      {#if _key.lines.find((v) => {
                        return v.name == _lang.className;
                      })}
                        {_key.lines.find((v) => {
                          return v.name == _lang.className;
                        }).text}
                      {:else}
                        -
                      {/if}
                    </a>
                  </td>
                {/if}
              {/each}
            </tr>
          {/each}
        {/each}
      {/each}
    </tbody>
  </table>
</div>
