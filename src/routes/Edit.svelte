<script type="ts">
  import strTable from "../assets/stringtable.json";
  import { formatTableToObject } from "../utils/util";
  import { Languages } from "../utils/Interfaces";
  import Menu from "../lib/Menu.svelte";
  import MdKeyboardArrowRight from "svelte-icons/md/MdKeyboardArrowRight.svelte";
  import MdKeyboardArrowDown from "svelte-icons/md/MdKeyboardArrowDown.svelte";

  const projectPath = strTable.elements[0];
  let projectName = projectPath.attributes.name;
  let stringtableHTML;
  // console.log(projectPath);

  let packages = projectPath.elements;
  let packageSelected = packages[0].attributes.name;
  let containerSelected = packages[0].elements[0].attributes.name;

  let stringtable = formatTableToObject(packages);

  var expanded = false;

  let languages = Languages;
  languages.forEach((_lang) => {
    // _lang.enabled;
  });

  const showCheckboxes = () => {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      expanded = true;
    } else {
      expanded = false;
    }
  };
</script>

<div id="container">
  <Menu>
    <label for="projectName">Nome do Projeto:</label>
    <input
      type="text"
      name="projectName"
      id="projectName"
      value={projectName}
      disabled
    /><br />

    <label for="packageName">Nome do Pacote:</label>
    <select name="packageName" id="packageName" bind:value={packageSelected}>
      {#each stringtable as pkg}
        <option value={pkg.name}>{pkg.name}</option>
      {/each}
    </select>

    <!-- ! DEPENDE DO PACKAGE SELECIONADO -->
    <label for="containerName">Nome do Contâiner:</label>
    <select
      name="containerName"
      id="containerName"
      bind:value={containerSelected}
    >
      {#each stringtable as pkg}
        {#if pkg.name == packageSelected}
          {#each pkg.containers as cont}
            <option value={cont.name}>{cont.name}</option>
          {/each}
        {/if}
      {/each}
    </select>

    <br />
    <ul>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li class="menuItem" on:click={showCheckboxes}>
        <div class="icon-small">
          {#if !expanded}
            <MdKeyboardArrowRight />
          {:else}
            <MdKeyboardArrowDown />
          {/if}
        </div>
        Filtrar Idiomas
      </li>
      {#if expanded}
        {#each Languages as lang}
          <label class="languageOption" for={lang.className}>
            <input
              id={lang.className}
              type="checkbox"
              bind:checked={lang.enabled}
            />
            {lang.className}
          </label>
        {/each}
      {/if}
    </ul>
  </Menu>

  <!-- ! DEPENDE DO CONTAINER SELECIONADO -->
  <div id="screen">
    <table bind:this={stringtableHTML}>
      <thead>
        <!-- Linha do Cabeçalho / Idiomas -->
        <tr>
          <th> Tag </th>
          {#each Languages as lang}
            {#if lang.enabled}
              <th>
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
              <tr>
                <td>{_key.ID}</td>
                {#each Languages as _lang}
                  {#if _lang.enabled}
                    <td class={_key.ID}>
                      {#if _key.lines.find((v) => {
                        return v.language == _lang.className;
                      })}
                        {_key.lines.find((v) => {
                          return v.language == _lang.className;
                        }).text}
                      {:else}
                        _
                      {/if}
                    </td>
                  {/if}
                {/each}
              </tr>
            {/each}
            <hr />
          {/each}
        {/each}
      </tbody>
    </table>
  </div>
</div>
