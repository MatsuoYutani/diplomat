<script type="ts">
  import strTable from "../assets/stringtable.json";
  import { formatTableToObject } from "../lib/util";
  import { Languages } from "../lib/Interfaces";

  const projectPath = strTable.elements[0];
  let projectName = projectPath.attributes.name;
  // console.log(projectPath);

  let packages = projectPath.elements;
  let packageSelected = packages[0].attributes.name;
  let containerSelected = packages[0].elements[0].attributes.name;

  let stringtable = formatTableToObject(packages);

  var expanded = false;

  const showCheckboxes = () => {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes.style.display = "inline-grid";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  };
</script>

<main>
  <label for="projectName">Nome do Projeto:</label>
  <input
    type="text"
    name="projectName"
    id="projectName"
    value={projectName}
    disabled
  />

  <br />

  <label for="packageName">Nome do Pacote:</label>
  <select name="packageName" id="packageName" bind:value={packageSelected}>
    {#each stringtable as pkg}
      <option value={pkg.name}>{pkg.name}</option>
    {/each}
  </select>

  <br />

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

  <div class="multiselect">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="selectBox" on:click={showCheckboxes}>
      <select>
        <option>Select an option</option>
      </select>
      <div class="overSelect" />
    </div>
    <div id="checkboxes">
      {#each Languages as lang}
        <label for={lang.className}>
          <input id={lang.className} type="checkbox" />
          {lang.className}
        </label>
      {/each}
    </div>
  </div>

  <!-- ! DEPENDE DO CONTAINER SELECIONADO -->
  <div>
    <table>
      <thead>
        <!-- Linha do Cabeçalho / Idiomas -->
        <tr>
          {#each Languages as lang}
            <th>
              {lang.className}
            </th>
          {/each}
        </tr>
      </thead>
    </table>
  </div>
</main>

<style>
  th {
    border: 1px solid black;
  }

  .multiselect {
    width: 200px;
  }

  .selectBox {
    position: relative;
    display: inline-block;
  }

  .selectBox select {
    width: 100%;
    font-weight: bold;
  }

  .overSelect {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  #checkboxes {
    background-color: #222;
    display: none;
    border: 1px #dadada solid;
    position: absolute;
    text-align: left;
  }

  #checkboxes label {
    display: block;
  }

  #checkboxes label:hover {
    background-color: #1e90ff;
  }
</style>
