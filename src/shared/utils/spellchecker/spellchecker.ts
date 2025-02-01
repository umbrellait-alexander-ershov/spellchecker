import Spellchecker from "hunspell-spellchecker";

import noAff from "../../../dictionary/index.aff";
import noDic from "../../../dictionary/index.dic";

export const spellchecker = new Spellchecker();

export const DIST = spellchecker.parse({
  aff: noAff,
  dic: noDic,
});

spellchecker.use(DIST);
