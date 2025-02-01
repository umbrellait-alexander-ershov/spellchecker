import { type FC, type FormEvent, useState } from "react";

import { handleCheckText } from "./utils";

import styles from "./app.module.css";
import type { SuggestionsTypes } from "./app.types";
import { locale } from "./app.locale";

export const App: FC = () => {
  const [suggestions, setSuggestions] = useState<SuggestionsTypes>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const textarea = form.elements[0] as HTMLTextAreaElement;

    if (textarea.value.trim().length > 0) {
      const newSuggestions = handleCheckText(textarea.value);
      setSuggestions(newSuggestions);
    }
  };

  const isCorrectText = Object.keys(suggestions).length === 0;

  const suggestionsWords = Object.keys(suggestions).map(
    (word: string, idx: number) => {
      const currentSuggestionWords = suggestions[word].join(", ");

      return (
        <li key={idx} className={styles.listItem}>
          <span className={styles.textThrough}>{word}:</span>
          <span>
            {currentSuggestionWords.length > 0
              ? currentSuggestionWords
              : locale.notFoundSuggestions}
          </span>
        </li>
      );
    },
  );

  return (
    <div className={styles.root}>
      <h1>{locale.pageTitle}</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea defaultValue="Привет" />
        <button type="submit">check</button>
      </form>

      <div>
        <h3 className={isCorrectText ? styles.textSuccess : styles.textError}>
          {isCorrectText ? locale.textIsCorrect : locale.textIsNotCorrect}
        </h3>

        {!isCorrectText && (
          <div>
            <h4>{locale.perhapsYouMeant}</h4>
            <ul className={styles.list}>{suggestionsWords}</ul>
          </div>
        )}
      </div>
    </div>
  );
};
