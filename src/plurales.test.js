const plurales = require("./plurales");

// Throws error if passed invalid string
test("Throws error if passed invalid string", () => {
  expect(() => plurales("123123")).toThrowError(new Error("Invalid string"));
  expect(() => plurales("amig4")).toThrowError(new Error("Invalid string"));
  expect(() => plurales("amig🍗")).toThrowError(new Error("Invalid string"));
});

// Returns the lowercased version fo the string
test("Returns the lowercased version fo the string", () => {
  expect(plurales("CASA")).toBe("casas");
  expect(plurales("TÍO")).toBe("tíos");
  expect(plurales("bEbÉ")).toBe("bebés");
});

// Regla No.1: Agregando -S al final del sustantivo
// La primera regla del plural en español dice que agregamos la letra -S al final de una palabra cuando termina con una vocal sin TILDE como las palabras “CASA” y “MESA”. Tanto “Casa” como “Mesa” no llevan TILDE en su forma singular y terminan en la vocal A. También agregamos la letra -S a las palabras que terminan en “É” como BEBÉ, siendo esta una excepción a la regla. Estos son algunos ejemplos de oraciones que muestran cómo formar el plural de los sustantivos en español agregando -S
test("Agregando -S al final del sustantivo", () => {
  expect(plurales("casa")).toBe("casas");
  expect(plurales("mamá")).toBe("mamás");
  expect(plurales("tío")).toBe("tíos");
  expect(plurales("bebé")).toBe("bebés");
  expect(plurales("sofá")).toBe("sofás");
});

// Regla No.2: Agregando -ES al final del sustantivo
// La segunda regla para el plural en español dice que agregamos las letras -ES cuando la palabra termina en consonante. Esta regla se aplica a sustantivos como “TELEVISOR” o “PAPEL” y también a aquellas que terminan en una vocal con TILDE (á, í, ó, ú), pero que no sea É (como en “Bebé”). Estos son algunos ejemplos de oraciones que usan sustantivos en plural en español con la terminación -ES:
test("Agregando -ES al final del sustantivo", () => {
  expect(plurales("televisor")).toBe("televisores");
  expect(plurales("papel")).toBe("papeles");
  expect(plurales("Jabalí")).toBe("jabalíes");
  expect(plurales("tabú")).toBe("tabúes");
  expect(plurales("reloj")).toBe("relojes");
});

// Regla No.3: Reemplazando -Z por -CES
// Cuando una palabra termina en la consonante -Z, reemplazamos la -Z por -CES. Algunos sustantivos comunes en español que terminan en -Z son: actriz, avestruz, feliz, pez y voz. Aquí hay algunos ejemplos de oraciones con sustantivos en plural en español que terminan en -Z. Haga clic en el botón PLAY para escuchar los ejemplos.
test("Reemplazando -Z por -CES", () => {
  expect(plurales("actriz")).toBe("actrices");
  expect(plurales("feliz")).toBe("felices");
  expect(plurales("pez")).toBe("peces");
  expect(plurales("voz")).toBe("voces");
});

// Regla No.4: Excepciones – Palabras sin plural en español
// Hay algunas palabras que no necesitan cambiar de singular a plural en español. Dichas palabras terminan -S y -X. Básicamente, las que terminan en -S originalmente ya están en plural. Algunas palabras que no tienen una forma plural son: Tórax, Crisis, Paraguas, Saltamontes y Nada. Algunas de estas palabras pueden tener una forma singular como “Saltamonte”, pero gramaticalmente deberíamos usarlas en plural.
test("Excepciones – Palabras sin plural en español", () => {
  expect(plurales("tórax")).toBe("tórax");
  expect(plurales("crisis")).toBe("crisis");
  expect(plurales("saltamontes")).toBe("saltamontes");
});

