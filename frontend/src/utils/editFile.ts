import strTable from "../assets/stringtable.json";
import { formatTableToObject } from "../utils/util";
import { languages } from "../utils/languages";
// import Menu from "../lib/Menu.svelte";
import {
  MdMenu,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
} from "svelte-icons/md";

export const projectPath = strTable.elements[0];
export let projectName = projectPath.attributes.name;
export let stringtableHTML;
// console.log(projectPath);

export let packages = projectPath.elements;
export let packageSelected = packages[0].attributes.name;
export let containerSelected = packages[0].elements[0].attributes.name;

export let stringtable = formatTableToObject(packages);
