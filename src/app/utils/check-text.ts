import type Spellchecker from "hunspell-spellchecker";

import XRegExp from "xregexp";

import type { SuggestionsTypes } from "../app.types";

const regex = XRegExp("\\p{L}+", "g");

export const checkText = (text: string, spellchecker: Spellchecker) => {
  const newSuggestions: SuggestionsTypes = {};
  const words: string | string[] = XRegExp.match(text, regex) || [];

  for (const word of words) {
    const isCorrectWord: boolean = spellchecker.check(word);

    if (!isCorrectWord) {
      newSuggestions[word] = spellchecker.suggest(word);
    }
  }

  return newSuggestions;
};
