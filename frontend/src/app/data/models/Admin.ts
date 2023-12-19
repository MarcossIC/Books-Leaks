import { Book } from "./book";

export interface AdminTable {
  headers: TableData[];
  body: TableBody[];
  actions?: TableActions[];
};

export interface TableBody {
  content: TableData[];
  id: string | number;
};

export interface TableData {
  data: string | number;
  key: string;
};


export interface TableActions {
  execute: ()=> void;
  name: string;
};

export interface TableColumns {
  column: string;
  id: string;
};

export enum AddState {
  WAITING=0, SENDING=1, COMPLETE=2
}

export interface AddModal {
  state: AddState;
  open: boolean;
}

export const BOOK_DATA_SOURCE: Book[] = [
  {
    idBook: 'book-admin-id-1',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 150,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-2',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 250,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-3',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 350,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-4',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 450,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-5',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 550,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-6',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 650,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-7',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 750,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-8',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 850,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-9',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 950,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-10',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 1050,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-11',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 1150,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-12',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 1250,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-13',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 1350,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-14',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 1450,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-15',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 1550,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-16',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 1650,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-17',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 1750,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-18',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 1850,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-19',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 1950,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-20',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 2050,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-21',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 2150,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
  {
    idBook: 'book-admin-id-22',
    title: 'Memoir of Vincent Van gogh',
    price: 500,
    pages: 2250,
    publicationDate: '12-10-2001',
    quantityAvailable: 1000,
    rating: 2,
    salesAmount: 5,
    description: 'description de un libro',
    collection: 'N/A',
    genre: 'genre 6',
    language: 'spanish',
    author: 'Jovan',
    nameEditorial: 'editorial 6',
    urlImages: ['image-1', 'image-2'],
    isbn: 1234567891011,
  },
];


export const BOOK_COLUMN: TableColumns[] = [
  {
    column: '#',
    id: 'admin-bookheader-1',
  },
  {
    column: 'title',
    id: 'admin-bookheader-2',
  },
  {
    column: 'ISBN',
    id: 'admin-bookheader-3',
  },
  {
    column: 'author',
    id: 'admin-bookheader-4',
  },
  {
    column: 'editorial',
    id: 'admin-bookheader-5',
  },
  {
    column: 'publish date',
    id: 'admin-bookheader-6',
  },
  {
    column: 'pages',
    id: 'admin-bookheader-7',
  },
  {
    column: 'price',
    id: 'admin-bookheader-8',
  },
  {
    column: 'quantity',
    id: 'admin-bookheader-9',
  },
  {
    column: 'actions',
    id: 'admin-bookheader-10'
  }
];
