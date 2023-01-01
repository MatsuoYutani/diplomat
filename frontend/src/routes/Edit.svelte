<script type="ts">
  import { onDestroy, onMount } from "svelte";
  import Editor from "../pages/Editor.svelte";
  import EditorSidebar from "../pages/EditorSidebar.svelte";
  import { stringtable as origin } from "../utils/editFile";
  import { stringtableVal, languageFilter } from "../utils/stores";
  import { languages } from "../utils/languages";

  // const unsubscribe = countVal.subscribe(() => {});
  const unsubscribeStringtable = stringtableVal.subscribe(() => {});
  const unsubscribeLanguageFilter = languageFilter.subscribe(() => {});

  stringtableVal.set(origin);
  languageFilter.set(languages);

  // unsubscribe();
  onDestroy(() => {
    unsubscribeStringtable();
    unsubscribeLanguageFilter();
  });

  let menus = {
    sidebar: true,
    packages: false,
    containers: false,
    keys: false,
    languages: false,
    modalEdit: false,
  };
</script>

<!-- {$countVal}
<button on:click={() => countVal.update((prevVal) => (prevVal += 1))}>ADD</button>
<button on:click={() => countVal.update((prevVal) => (prevVal -= 1))}>SUB</button>
<button on:click={() => countVal.set(0)}>RST</button> -->
<div id="layout" class="flex font-sans max-h-screen">
  <EditorSidebar {menus} />
  <Editor {menus} />
</div>
