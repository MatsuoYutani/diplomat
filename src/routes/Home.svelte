<script lang="ts">
  import svelteLogo from "../assets/svelte.svg";

  // const showCreateFileDialog = () => {
  //   console.log("Called from child!");
  // };
  import Menu from "../lib/Menu.svelte";
  import MdMenu from "svelte-icons/md/MdMenu.svelte";
  import MdCreateNewFolder from "svelte-icons/md/MdCreateNewFolder.svelte";
  import { Link } from "svelte-routing";
  import { openFile } from "../utils/openFile";
  import { createFile } from "../utils/createFile";

  // let menuExpanded = true;
</script>

<div id="container">
  <Menu>
    <div class="icon"><MdMenu /></div>
    <span class="menuTitle">Menu</span>
    <hr />
    <ul>
      <li class="menuItem">
        <Link to="/new">Novo projeto</Link>
      </li>
      <li class="menuItem">
        <Link to="/open" on:click={openFile}>Abrir projeto</Link>
      </li>
      <li class="menuItem">
        <Link to="/edit">Editar (TEMP)</Link>
      </li>
    </ul>
    <p>Projeto Recente:</p>
  </Menu>

  <div id="screen">
    <div class="card">
      <h1 id="title"><a href="/">📕 Diplomat</a></h1>
      <div class="card boxed">Aqui ficarão os projetos/arquivos recentes</div>
    </div>
  </div>
</div>
