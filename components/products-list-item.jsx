import React from 'react'
import Image from 'next/image'
import NumberFormat from 'react-number-format'
import {
	MinusSmIcon,
	PlusSmIcon,
	StarIcon,
	XIcon,
} from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../slices/cartSlice'

const ProductsListItem = ({
	id,
	title,
	image,
	description,
	price,
	category,
	rating,
	hasPrime,
	count,
}) => {
	const dispatch = useDispatch()

	const addItemToCart = () => {
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
		// Push item into redux
		dispatch(addToCart(product))
	}

	const removeItemToCart = () => {
		// Remove item from redux
		dispatch(removeFromCart({ id }))
	}

	return (
		<div className="grid grid-cols-8 gap-x-5 py-5 first:border-t first:border-slate-200">
			<div className="col-start-1 col-end-3 place-self-center">
				<Image src={image} width={200} height={200} objectFit="contain" />
			</div>

			<div className="col-start-3 col-end-8">
				<h3 className="font-semibold leading-snug text-sm lg:text-base">
					{title}
				</h3>

				<div className="flex mt-2">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<StarIcon
								key={i}
								className="w-3 h-3 md:w-4 md:h-4 text-yellow-500"
							/>
						))}
				</div>

				<p className="text-xs text-slate-600 my-2 line-clamp-2 lg:line-clamp-3">
					{description}
				</p>

				<div className="flex items-center justify-between">
					<NumberFormat
						prefix="$"
						value={price}
						displayType="text"
						decimalScale={2}
						decimalSeparator="."
						fixedDecimalScale={true}
						thousandSeparator={true}
						className="font-semibold text-sm lg:text-base leading-none"
					/>

					<span className="font-medium text-sm lg:text-base leading-none">
						Qty: {count}
					</span>
				</div>

				{hasPrime && (
					<div className="flex items-center space-x-2 mt-2">
						<Image
							src="https://links.papareact.com/fdw"
							loading="lazy"
							objectFit="cover"
							width={48}
							height={18}
							alt="Prime"
						/>
						<p className="text-xs text-slate-500">Free Next-day Delivery</p>
					</div>
				)}
			</div>

			<div className="flex flex-col items-end justify-center gap-3">
				<button onClick={addItemToCart} className="text-neutral-600 button">
					<PlusSmIcon className="w-4 h-4" />
				</button>
				<button onClick={removeItemToCart} className="text-neutral-600 button">
					<MinusSmIcon className="w-4 h-4" />
				</button>
			</div>
		</div>
	)
}

export default ProductsListItem
