import type { Package, Container, Key, Line } from "../lib/Interfaces";

export const formatTableToObject = (packages) => {
  let arrPackages: Package[] = [];
  // Package Loop
  packages.forEach((_pkg) => {
    let pkg: Package = {
      name: _pkg.attributes.name,
      containers: [],
    };

    // Container Loop
    _pkg.elements.forEach((_cont) => {
      let cont: Container = {
        name: _cont.attributes.name,
        keys: [],
      };

      // Key Loop
      _cont.elements.forEach((_key) => {
        let key: Key = {
          ID: _key.attributes.ID,
          lines: [],
        };

        // Line Loop
        // obs. o campo texto só suporta um valor, assim como deveria ser.
        _key.elements.forEach((_line) => {
          let line: Line = {
            language: _line.name,
            text: _line.elements[0].text,
          };

          key.lines.push(line);
        });

        // Fecha a matriz de keys
        cont.keys.push(key);
      });

      // Fecha a matriz de containers
      pkg.containers.push(cont);
    });

    // Fecha a matriz de packages
    arrPackages.push(pkg);

    // pkg.containers.forEach(_cont => {
    //   let cont: Container = {
    //     name: _pkg.elements.,
    //     keys: []
    //   }
    // });
  });

  return arrPackages
}