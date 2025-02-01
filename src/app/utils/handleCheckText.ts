import XRegExp from "xregexp";

import { spellchecker } from "../../shared";

import type { SuggestionsTypes } from "../app.types";

const regex = XRegExp("\\p{L}+", "g");

export const handleCheckText = (text: string): SuggestionsTypes => {
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
