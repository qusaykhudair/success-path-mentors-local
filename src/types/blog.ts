export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    photo: string;
  };
  publishedAt: string;
  readingTimeMinutes: number;
};
