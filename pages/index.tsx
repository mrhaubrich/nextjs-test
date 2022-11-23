import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Book from '../components/book';
import Pagination from '../components/pagination';

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
  const booksComponents = books.map((book) => <Book key={book.id} book={book} />)
  return (
    <Layout title='Livros' home>
      <section className={utilStyles.headingMd}>
        <p>Livros:</p>
        <Pagination total={booksComponents.length} limit={10} offset={2} components={booksComponents}></Pagination>
      </section>
    </Layout>
  );
}
