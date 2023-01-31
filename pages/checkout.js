import Head from 'next/head'
import Image from 'next/image'
import NumberFormat from 'react-number-format'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useSession, signIn, signOut } from 'next-auth/react'
import {
	selectEstimatedTax,
	selectItems,
	selectItemsCount,
	selectItemsTotal,
} from '../slices/cartSlice'
import ProductsListItem from '../components/products-list-item'

const Checkout = () => {
	const router = useRouter()
	const { data: session } = useSession()

	const items = useSelector(selectItems)
	const itemsCount = useSelector(selectItemsCount)

	const total = useSelector(selectItemsTotal)
	const estimatedTax = useSelector(selectEstimatedTax)

	return (
		<div className="w-full min-h-screen pb-5">
			<Head>
				<title>Checkout :: Amazon 2.0</title>
				<meta name="description" content="Amazon 2.0 with NextJs and Stripe" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="border-b border-gainsboro bg-gradient-to-t from-neutral-200 to-neutral-100 mb-6">
				<div className="max-w-6xl mx-auto px-3 md:px-4">
					<div className="flex items-center justify-between">
						<div
							onClick={() => router.push('/')}
							className="h-[59px] grid place-items-center"
						>
							<img
								className="w-[90px] h-[30px] md:w-[103px] md:h-[31px] object-contain mt-2 cursor-pointer"
								src="/assets/amazon-logo-black.png"
								alt="logo"
							/>
						</div>

						<div className="font-semibold text-xl md:text-2xl lg:text-3xl text-rich-black-29">
							Checkout (
							<span className="text-sky-700">
								{itemsCount === 1
									? `${itemsCount} item`
									: `${itemsCount} items`}
							</span>
							)
						</div>

						<div>
							<LockClosedIcon className="w-6 h-6 text-neutral-500" />
						</div>
					</div>
				</div>
			</header>

			<main className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-4 lg:gap-6 px-3 md:px-4">
				<div className="flex-1">
					<Image
						src="https://links.papareact.com/ikj"
						width={1020}
						height={250}
						objectFit="cover"
					/>

					<div className="bg-white p-4 lg:py-4 lg:px-6 border border-gainsboro">
						<h1 className="font-bold text-xl lg:text-2xl mb-4 lg:mb-5 lg:mt-1">
							{items.length === 0
								? 'No item shopping cart...'
								: 'Shopping Cart'}
						</h1>

						<div className="grid grid-cols-1 divide-y divide-slate-200">
							{items.map((item, idx) => (
								<ProductsListItem key={idx} {...item} />
							))}
						</div>
					</div>
				</div>

				{items.length > 0 && (
					<div className="bg-white w-full md:w-72 border border-gainsboro">
						<div className="py-[14px] px-[18px]">
							{!session ? (
								<button
									onClick={!session ? signIn : signOut}
									className="w-full bg-neutral-400 hover:bg-neutral-500 text-rich-black-29 text-sm p-[6px] md:p-2 border border-neutral-500"
								>
									Sign in to checkout
								</button>
							) : (
								<button
									role="link"
									className="w-full bg-yellow-400 hover:bg-yellow-500 text-rich-black-29 text-sm p-2 border border-yellow-500 disabled:bg-slate-400 disabled:border-slate-500 disabled:text-slate-600"
									disabled={items.length === 0}
								>
									Place your order
								</button>
							)}
							<p className="text-center text-[11px] text-slate-600 pb-2 mt-2 border-b border-slate-200">
								By placing your order, you agree to Amazon&apos;s privacy notice
								and conditions of use.
							</p>

							<h3 className="font-bold text-lg my-3">Order Summary</h3>

							<div className="pb-2 border-b border-slate-200">
								<div className="flex items-center justify-between text-xs mt-1">
									<span>Items ({itemsCount}):</span>
									<NumberFormat
										prefix="$"
										value={total}
										displayType="text"
										decimalScale={2}
										decimalSeparator="."
										fixedDecimalScale={true}
										thousandSeparator={true}
									/>
								</div>
								<div className="flex items-center justify-between text-xs mt-1">
									<span>Shipping & handling:</span>
									<span>$0.00</span>
								</div>
								<div className="flex items-center justify-between text-xs mt-2">
									<span>Total before tax:</span>
									<NumberFormat
										prefix="$"
										value={total}
										displayType="text"
										decimalScale={2}
										decimalSeparator="."
										fixedDecimalScale={true}
										thousandSeparator={true}
									/>
								</div>
								<div className="flex items-center justify-between text-xs mt-1">
									<span>Estimated tax to be collected:</span>
									<NumberFormat
										prefix="$"
										value={estimatedTax}
										displayType="text"
										decimalScale={2}
										decimalSeparator="."
										fixedDecimalScale={true}
										thousandSeparator={true}
									/>
								</div>
							</div>

							<div className="flex items-center justify-between font-bold text-base md:text-lg text-red-700 mt-2">
								<span>Order total:</span>
								<NumberFormat
									prefix="$"
									value={total + estimatedTax}
									displayType="text"
									decimalScale={2}
									decimalSeparator="."
									fixedDecimalScale={true}
									thousandSeparator={true}
								/>
							</div>
						</div>

						<div className="bg-gray-100 text-xs py-[14px] px-5 border-t border-slate-200">
							<p className="text-cyan-600 mb-1">
								How are shipping costs calculated?
							</p>
							<p>Prime shipping benefits have been applied to your order.</p>
						</div>
					</div>
				)}
			</main>
		</div>
	)
}

export default Checkout
