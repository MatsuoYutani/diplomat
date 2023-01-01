<script lang="ts">
  import Sidebar from "../pages/Sidebar.svelte";

  export let menu: {
    name: string;
    iconModel: string;
    path: string;
  }[];

  let projectName;
  let isNameInvalid: boolean = false;
</script>

<div id="layout" class="flex font-sans">
  <Sidebar {menu} />
  <div class="m-auto">
    <h2 class="text-white text-xl pb-2">Nome do Projeto:</h2>
    <input
      class="p-4 text-center w-96"
      class:inputInvalid={isNameInvalid}
      maxlength="40"
      type="text"
      name="projectName"
      id="projectName"
      bind:value={projectName}
      on:input={() => {
        isNameInvalid = !projectName.match(/^[a-zA-Z0-9]+$/);
      }}
    />
    <p class="text-center text-white">
      {#if isNameInvalid}
        Apenas caracteres alfanuméricos (A-z/0-9).
      {/if}
    </p>
    <button class="text-white p-4 mt-2 text-center w-96 block buttonCreate">CRIAR</button>
  </div>
</div>
