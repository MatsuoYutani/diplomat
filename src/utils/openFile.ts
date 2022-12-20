import { open } from "@tauri-apps/api/dialog";
import { readTextFile } from "@tauri-apps/api/fs";
import * as xmljs from "xml-js";

export const openFile = async () => {
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
