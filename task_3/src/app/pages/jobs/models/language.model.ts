export const LANGUAGE_LEVEL = {
  1 : "BEGINNER",
  2 : "INTERMEDIATE",
  3 : "FLUENT"
}

export interface LanguageModel {
  level: number;
  name: string;
}
