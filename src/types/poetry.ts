export type Language = "fr" | "zh";

export interface PoemTranslation {
  title: string;
  content: string;
}

export interface PoemYear {
  fr: PoemTranslation;
  zh: PoemTranslation;
}

export type PoemsArchive = Record<number, PoemYear>;
