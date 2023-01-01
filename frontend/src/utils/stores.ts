import { writable } from 'svelte/store';
import { languages} from "./languages";

// export const countVal = writable(0);

export const stringtableVal = writable<Package[]>([])
export const changeStringtable = (newString: Package[]) => {
  stringtableVal.update(()=>{return newString})
}

export const languageFilter = writable(languages)
export const changeLanguageFilter = (newString: Language[]) => {
  languageFilter.update(()=>{return newString})
}