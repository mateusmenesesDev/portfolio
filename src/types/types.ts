export interface IProjetos {
  id: number;
  name: string;
  description: string;
  url: string;
  homepage: string;
  html_url: string;
  topics: [string];
  imagePreview?: string;
}
