import Spellchecker from "hunspell-spellchecker";

let spellcheckerInstance: Spellchecker;

export const initSpellchecker = async () => {
  if (spellcheckerInstance) return spellcheckerInstance;

  const noAff = await import("../../../dictionary/index.aff");
  const noDic = await import("../../../dictionary/index.dic");

  const spellchecker = new Spellchecker();

  const DIST = spellchecker.parse({
    aff: noAff.default,
    dic: noDic.default,
  });

  spellchecker.use(DIST);

  spellcheckerInstance = spellchecker;

  return spellcheckerInstance;
};
