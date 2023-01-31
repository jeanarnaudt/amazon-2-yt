import Image from 'next/image'
import ProductsGridItem from './products-grid-item'

const ProductsGrid = ({ products }) => {
	return (
		<div className="grid grid-flow-row-dense gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 py-6 -mt-20 md:-mt-28 lg:-mt-36 xl:-mt-72">
			{products.slice(0, 4).map(({ ...product }, idx) => (
				<ProductsGridItem key={idx} {...product} />
			))}

			<div className="md:col-span-full pt-[5px]">
				<Image
					src="https://links.papareact.com/dyz"
					width={1500}
					height={300}
					objectFit="cover"
					alt="Ad"
				/>
			</div>

			<div className="md:col-span-2 xl:col-span-1">
				{products.slice(4, 5).map(({ ...product }, idx) => (
					<ProductsGridItem key={idx} {...product} />
				))}
			</div>

			{products.slice(5, products.length).map(({ ...product }, idx) => (
				<ProductsGridItem key={idx} {...product} />
			))}
		</div>
	)
}

export default ProductsGrid
