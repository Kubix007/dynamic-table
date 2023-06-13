export interface IBookState {
  books: {
    kind: string;
    totalItems: number;
    items: IBook[];
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

export interface IBook {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    publisher: string;
    publishedDate: Date;
    description: string;
    industryIdentifiers: [
      {
        type: string;
        identifier: number;
      },
      {
        type: string;
        identifier: number;
      }
    ];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
    };
    pdf: {
      isAvailable: boolean;
      acsTokenLink: string;
    };
    webReaderLink: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo: {
    textSnippet: string;
  };
}
