<script lang="ts">
  import { open, save } from "@tauri-apps/api/dialog";
  import * as xmljs from "xml-js";
  import xmlFormatter from "xml-formatter";

  // import fs from "fs";
  import {
    readTextFile,
    BaseDirectory,
    writeTextFile,
  } from "@tauri-apps/api/fs";
  import stringtable_sample from "../assets/stringtable.json";
  import { Link } from "svelte-routing";

  const createFile = async () => {
    // Get Project Name
    // TODO Sanitize
    const input = document.getElementById(
      "input_project_name"
    ) as HTMLInputElement | null;

    // Load Sample and change Project Name
    let newStrTable = stringtable_sample;
    newStrTable.elements[0].attributes.name = input.value;

    // let teste2 = JSON.stringify(teste);

    // Convert the JSON to XML
    const xml = xmljs.js2xml(newStrTable, { compact: false });

    // Format the XML
    const readyXml = xmlFormatter(xml, {
      indentation: "	",
      collapseContent: true,
    });

    // TODO Save Project Name to Sample

    try {
      const projectPath = await save({
        filters: [
          {
            name: "stringtable (.xml)",
            extensions: ["xml"],
          },
        ],
      });
      if (!projectPath) return;

      await writeTextFile(projectPath, readyXml, {
        dir: BaseDirectory.AppConfig,
      });
    } catch (err) {
      console.error(err);
    }
  };

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

      const result = xmljs.xml2js(xml);

      const json = JSON.stringify(result);
      console.log(json);

      const xmlparsed = xmljs.js2xml(result, { compact: false });
      console.log(xmlparsed);
    } catch (err) {
      console.error(err);
    }
  };
</script>

<div class="card">
  <div>
    <input
      type="text"
      name="input_project_name"
      id="input_project_name"
      value="Nome do Projeto"
    />
  </div>
  <br />
  <div>
    <button on:click={createFile}>Criar novo projeto</button>
    <button on:click={openFile}>Abrir um projeto</button>
    <Link to="/edit">
      <button>Editar</button>
    </Link>
  </div>
</div>

<style>
  button {
    min-width: 30vw;
  }
</style>
