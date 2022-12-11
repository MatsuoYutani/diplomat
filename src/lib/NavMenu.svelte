<script lang="ts">
  // let count: number = 0
  // const increment = () => {
  //   count += 1
  // }

  import { open } from "@tauri-apps/api/dialog";
  import * as xmljs from "xml-js";
  // import fs from "fs";
  import { readTextFile, BaseDirectory } from "@tauri-apps/api/fs";

  const openFile = async () => {
    try {
      const selectedPath = await open({
        multiple: false,
        filters: [
          {
            name: "stringtable (.xml)",
            extensions: ["xml"],
          },
        ],
      });
      if (!selectedPath) return;

      const contents = await readTextFile(selectedPath as string);
      console.log(contents);
      let xml = contents;

      // let xml = '<foo attr="value">bar</foo>';
      // const xml = fs.readFileSync("file.xml", "utf-8");
      // console.log(xml);

      const result = xmljs.xml2js(xml);

      // convert the JavaScript object to a JSON string
      const json = JSON.stringify(result);
      console.log(json);

      const xmlparsed = xmljs.js2xml(result, { compact: false });
      console.log(xmlparsed);
    } catch (err) {
      console.error(err);
    }
  };
</script>

<!-- <button on:click={increment}>
  count is {count}
</button> -->
<button>Novo</button>
<button on:click={openFile}>Abrir</button>
