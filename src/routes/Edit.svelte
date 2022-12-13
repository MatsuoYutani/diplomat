<script type="ts">
  import { element } from "svelte/internal";
  import strTable from "../assets/stringtable.json";

  const projectPath = strTable.elements[0];
  // console.log(projectPath);

  let packages = projectPath.elements;
  let packageSelected = document.getElementById("packageName");
  console.log(JSON.stringify(packageSelected));

  let valor = packages[0].attributes.name;
  console.log(valor);
  // packages.forEach((pkg) => {
  //   console.log("Pacote:" + pkg.attributes.name);
  // });

  // Data Ready
  let projectName = projectPath.attributes.name;
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
  <select name="packageName" id="packageName" bind:value={valor}>
    {#each packages as pkg}
      <option value={pkg.attributes.name}>{pkg.attributes.name}</option>
    {/each}
  </select>

  <br />

  <!-- ! DEPENDE DO PACKAGE SELECIONADO -->
  <label for="containerName">Nome do Contâiner:</label>
  <select name="containerName" id="containerName">
    {#each packages as pkg}
      {#each pkg.elements as cont}
        <option value={cont.attributes.name}>{cont.attributes.name}</option>
      {/each}
    {/each}
  </select>
</main>
