import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Book from '../components/book';

export type BookType = {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: string;
}

type Props = {
  books: BookType[];
}

export async function getServerSideProps() {
  const res = await fetch('https://my.api.mockaroo.com/books.json?key=b843f290');
  const books = await res.json();

  return {
    props: {
      books,
    },
  };
}

export default function Home({ books }: Props) {
  return (
    <Layout title='Livros' home>
      <section className={utilStyles.headingMd}>
        <p>Livros:</p>
        {books.map((book) => <Book key={book.id} book={book} />)}
      </section>
    </Layout>
  );
}
