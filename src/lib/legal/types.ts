export type LegalArticle = {
  num: string;
  title: string;
  paragraphs: string[];
};

export type LegalDocument = {
  kicker: string;
  title: string;
  versionNote: string;
  articles: LegalArticle[];
};
