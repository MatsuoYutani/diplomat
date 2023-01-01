declare var Package: Package;
declare var Container: Container;
declare var Key: Key;
declare var Line: Line;
declare var Language: Language;
declare var Cell: Cell;

interface Package {
  name: string;
  containers: Container[];
  isSelected?: boolean;
}

interface Container {
  name: string;
  keys: Key[];
  isSelected?: boolean;
}

interface Key {
  name: string;
  lines: Line[];
}

// TODO Enumerate the languages accepted
interface Line {
  name: string;
  text: string;
}

 interface Language {
  className: string,
  displayName: string,
  enabled: boolean
}

interface Cell {
  language: string,
  tag: string
}