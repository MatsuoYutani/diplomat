<script lang="ts">
  import Icon from "../components/Icon.svelte";
  import { Link } from "svelte-routing";

  export let menu: {
    name: string;
    iconModel: string;
    path: string;
  }[];

  let url = ``;

  url = "/" + window.location.href.split("/").pop();
</script>

<nav id="menu" class="pt-2 min-h-screen w-52 max-w-1/4">
  <h1 class="text-2xl text-white py-3 px-3 inline-flex pb-5">
    <Icon model="menu" />
    <span class="inline-flex">DIPLOMAT</span>
  </h1>
  <ul class="text-white">
    {#each menu as item}
      <Link to={item.path}>
        <li class="px-3 py-2 menuItem" class:currentPage={url == item.path}>
          <div class="flex">
            <Icon model={item.iconModel} />
            <span class="text-lg leading-loose inline-flex">{item.name}</span>
          </div>
        </li>
      </Link>
    {/each}
  </ul>
</nav>
