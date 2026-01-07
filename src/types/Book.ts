export interface Book {
  key: string;
  title: string;
  author: string;
  year: number | null;
  edition_key: string | null;
  cover_id: number | null;
}
