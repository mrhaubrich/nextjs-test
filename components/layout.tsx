import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  home?: boolean;
  title: string;
};

const name = 'GordãoLivros';

export default function Layout({ children, home, title }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Teste de Livros"
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Image
          priority
          src="/images/profile.png"
          className={utilStyles.borderCircle}
          height={30}
          width={30}
          alt=""
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}