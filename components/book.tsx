/* eslint-disable @next/next/no-img-element */
import { BookType } from "../pages";
import Image from "next/image";
import { useState } from "react";

type Props = {
    book: BookType;
}

export default function Book({ book }: Props) {
    const [ratio , setRatio] = useState(1);

    return (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <Image
            src={book.cover}
            alt={book.title}
            width={200}
            height={200 / ratio}
            unoptimized
            onLoad={(e) => setRatio(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight)}
          />
        </div>
    );
}