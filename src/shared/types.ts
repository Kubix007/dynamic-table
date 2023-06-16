export interface IBookState {
  books: IBook[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

export interface ISelectedBookState {
  authorsBook: IBook[];
  bookDetails: IBookDetails | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

export interface IBook {
  kind: string;
  full_sort_key: string;
  title: string;
  url: string;
  cover_color: string;
  author: string;
  cover: string;
  epoch: string;
  href: string;
  has_audio: boolean;
  genre: string;
  simple_thumb: string;
  slug: string;
  cover_thumb: string;
  liked: boolean;
}

export interface IBookDetails {
  title: string;
  url: string;
  language: string;
  epochs: [
    {
      url: string;
      href: string;
      name: string;
      slug: string;
    }
  ];
  genres: [
    {
      url: string;
      href: string;
      name: string;
      slug: string;
    }
  ];
  kinds: [
    {
      url: string;
      href: string;
      name: string;
      slug: string;
    }
  ];
  authors: [
    {
      url: string;
      href: string;
      name: string;
      slug: string;
    }
  ];
  translators: [
    {
      name: string;
    }
  ];
  fragment_data: string;
  children: [];
  parent: null;
  preview: boolean;
  epub: string;
  mobi: string;
  pdf: string;
  html: string;
  txt: string;
  fb2: string;
  xml: string;
  media: [];
  audio_length: string;
  cover_color: string;
  simple_cover: string;
  cover_thumb: string;
  cover: string;
  simple_thumb: string;
  isbn_pdf: string;
  isbn_epub: string;
  isbn_mobi: string;
}
