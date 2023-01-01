
  import { save } from "@tauri-apps/api/dialog";
  import * as xmljs from "xml-js";
  import xmlFormatter from "xml-formatter";
  import {
    BaseDirectory,
    writeTextFile,
  } from "@tauri-apps/api/fs";
  import stringtable_sample from "../assets/stringtable.json";

export const createFile = async () => {
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