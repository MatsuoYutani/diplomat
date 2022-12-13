export interface Package {
  name: string;
  containers: Container[];
}

export interface Container {
  name: string;
  keys: Key[];
}

export interface Key {
  ID: string;
  lines: Line[];
}

// TODO Enumerate the languages accepted
export interface Line {
  language: string;
  text: string;
}

export interface Language {
  className: string,
  displayName: string
}

export const Languages: Language[] = [
  {
    className: "English",
    displayName: "English"
  },
  {
    className: "Czech",
    displayName: "Čeština"
  },
  {
    className: "French",
    displayName: "Français"
  },
  {
    className: "Spanish",
    displayName: "Español"
  },
  {
    className: "Italian",
    displayName: "Italiano"
  },
  {
    className: "Polish",
    displayName: "Polski"
  },
  {
    className: "Portuguese",
    displayName: "Português do Brasil"
  },
  {
    className: "Russian",
    displayName: "Русский"
  },
  {
    className: "German",
    displayName: "Deutsch"
  },
  {
    className: "Korean",
    displayName: "한국어"
  },
  {
    className: "Japanese",
    displayName: "日本語"
  },
  {
    className: "Chinese",
    displayName: "繁體中文"
  },
  {
    className: "Chinesesimp",
    displayName: "简体中文"
  },
  {
    className: "Turkish",
    displayName: "Türkçe"
  },
  {
    className: "Swedish",
    displayName: "Swedish*"
  },
  {
    className: "Slovak",
    displayName: "Slovak"
  },
  {
    className: "SerboCroatian",
    displayName: "SerboCroatian"
  },
  {
    className: "Norwegian",
    displayName: "Norwegian"
  },
  {
    className: "Icelandic",
    displayName: "Icelandic"
  },
  {
    className: "Hungarian",
    displayName: "Magyar"
  },
  {
    className: "Greek",
    displayName: "Greek"
  },
  {
    className: "Finnish",
    displayName: "Finnish"
  },
  {
    className: "Dutch",
    displayName: "Dutch"
  }
]