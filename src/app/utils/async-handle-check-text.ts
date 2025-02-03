import type Spellchecker from "hunspell-spellchecker";
import { initSpellchecker } from "../../shared";
import { checkText } from "./check-text";

export const asyncHandleCheckText = async (text: string) => {
  const spellchecker: Spellchecker = await initSpellchecker();

  return checkText(text, spellchecker);
};
