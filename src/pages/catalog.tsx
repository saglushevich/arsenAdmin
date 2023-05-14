import Head from 'next/head'
import { useRouter } from 'next/router';
import Layout from '@components/layout'
import Catalog from '@components/Catalog'

export async function getServerSideProps() {
    const response = await fetch("https://diplom-e-commerce-server.onrender.com/api/auth/catalog");

    const data = await response.json();

    return {
        props: {
            products: data
        }
    }
}

export default function CatalogPage({ products }: any) {
    const router = useRouter();

    if (typeof window !== "undefined") {
        if (!localStorage.getItem("email")) {
            router.push("/")
        }
    };

    return (
        <>
            <Head>
              <title>Каталог товаров</title>
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Catalog products={products.products} />
            </Layout>
        </>
    )
}
