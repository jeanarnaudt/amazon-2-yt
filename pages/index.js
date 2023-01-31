import Head from 'next/head'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Header from '../components/header'
import ProductsGrid from '../components/products-grid'

export default function Home({ products }) {
	return (
		<>
			<Head>
				<title>Home :: Amazon 2.0</title>
				<meta name="description" content="Amazon 2.0 with NextJs and Stripe" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>
				<div className="container">
					<Banner />
					<ProductsGrid products={products} />
				</div>
			</main>

			<Footer />
		</>
	)
}

// This gets called on every request
export async function getServerSideProps() {
	const res = await fetch('https://fakestoreapi.com/products')
	// Fetch data from external API
	const products = await res.json()

	return { props: { products } }
}
