/* eslint-disable @next/next/no-img-element */
import { BookType } from "../pages";

type Props = {
    book: BookType;
}

export default function Book({ book }: Props) {
    return (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <img
            src={book.cover}
            alt={book.title}
          />
        </div>
    );
}