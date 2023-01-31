import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import NumberFormat from 'react-number-format'
import { StarIcon } from '@heroicons/react/solid'
import { addToCart } from '../slices/cartSlice'

const MIN_RATING = 1
const MAX_RATING = 5

const ProductsGridItem = ({ id, title, image, description, price, category }) => {
	const dispatch = useDispatch()

	const [rating] = useState(
		Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
	)

	const [hasPrime] = useState(Math.random() < 0.5)

	const [count] = useState(1)

	const handleAddToCart = () => {
		const product = {
			id,
			title,
			image,
			description,
			price,
			category,
			rating,
			hasPrime,
			count,
		}
		// Sending the product as an action to the redux store... the basket slice
		dispatch(addToCart(product))
	}

	return (
		<div className="bg-white relative flex flex-col p-10 z-30">
			<p className="absolute top-5 right-10 text-xs italic text-slate-500">
				{category}
			</p>

			<Image
				src={image}
				alt={title}
				width={200}
				height={200}
				objectFit="contain"
			/>

			<h1 className="my-3 font-bold">{title}</h1>

			<div className="flex">
				{Array(rating)
					.fill()
					.map((_, i) => (
						<StarIcon key={i} className="w-4 h-4 text-yellow-500" />
					))}
			</div>

			<p className="text-xs my-2 line-clamp-2">{description}</p>

			<div className="mb-5 font-semibold ">
				<NumberFormat
					prefix="$"
					value={price}
					displayType="text"
					decimalScale={2}
					decimalSeparator="."
					fixedDecimalScale={true}
					thousandSeparator={true}
				/>
			</div>

			<div className="mb-2">
				{hasPrime && (
					<div className="flex items-center space-x-2 -mt-5">
						<Image
							src="https://links.papareact.com/fdw"
							objectFit="cover"
							width={48}
							height={18}
							alt="Prime"
						/>
						<p className="text-xs text-slate-500">Free Next-day Delivery</p>
					</div>
				)}
			</div>

			<button onClick={handleAddToCart} className="mt-auto button">
				Add to cart
			</button>
		</div>
	)
}

export default ProductsGridItem
