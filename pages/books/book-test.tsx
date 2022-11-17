import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstBook() {
    return (
        <Layout>
            <Head>
                <title>First Book</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>First Book</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}