import { spellchecker } from "../../shared";

import type { SuggestionsTypes } from "../app.types";

import { checkText } from "./check-text";

export const handleCheckText = (text: string): SuggestionsTypes =>
  checkText(text, spellchecker);
