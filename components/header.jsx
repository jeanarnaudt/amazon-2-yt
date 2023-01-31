import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useSession, signIn, signOut } from 'next-auth/react'
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
	LocationMarkerIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { selectItems, selectItemsCount } from '../slices/cartSlice'

const Header = () => {
	const { data: session } = useSession()
	const router = useRouter()

	const items = useSelector(selectItems)
	const itemsCount = useSelector(selectItemsCount)

	return (
		<header>
			<div className="flex items-center bg-rich-black-29 px-[11px]">
				<div className="flex items-center">
					<div className="flex items-center">
						<div
							onClick={() => router.push('/')}
							className="w-28 h-[50px] px-2 grid place-items-center border border-transparent hover:border hover:border-white rounded cursor-pointer"
						>
							<Image
								src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"
								objectFit="contain"
								width={100}
								height={30}
								className="cursor-pointer"
							/>
						</div>

						<div className="hidden md:block h-[50px] pt-[6px] px-[9px] pb-[8px] my-[5px] border border-transparent hover:border hover:border-white rounded cursor-pointer">
							<Link href="/">
								<span className="text-white flex items-center">
									<LocationMarkerIcon className="w-[22px] h-[22px] mt-2" />
									<div className="ml-[3px]">
										<span className="text-xs block">Hello</span>
										<span className="font-bold text-sm block">
											Select your address
										</span>
									</div>
								</span>
							</Link>
						</div>
					</div>
				</div>

				<div className="flex-1 py-[10px] px-1 mx-[10px]">
					<div className="flex items-center">
						<div className="flex-1 bg-white py-2 px-3 rounded-l">
							<input
								type="text"
								className="w-full focus:ring-0 focus:outline-none"
							/>
						</div>
						<button className="bg-apricot hover:bg-yellow-orange py-2 px-[10px] rounded-r">
							<SearchIcon className="pointer-events-none text-rich-black-39 h-6 w-6" />
						</button>
					</div>
				</div>

				<div className="hidden md:block my-[5px] cursor-pointer">
					<Link href="/">
						<div
							onClick={!session ? signIn : signOut}
							className="text-white pt-[2px] px-[9px] pb-[8px] border border-transparent hover:border hover:border-white rounded"
						>
							<span className="text-xs">
								Hello, {session ? session.user.name : 'Sign in'}
							</span>
							<div className="text-sm leading-none flex items-end gap-1">
								<span className="font-bold">Account & Lists</span>
								<ChevronDownIcon className="w-4 h-4" />
							</div>
						</div>
					</Link>
				</div>

				<div className="hidden md:block my-[5px] cursor-pointer">
					<Link href="/">
						<div className="text-white py-[7px] px-[9px] border border-transparent hover:border hover:border-white rounded">
							<span className="text-xs block mb-1">Returns</span>
							<span className="font-bold text-sm leading-none block">
								& Orders
							</span>
						</div>
					</Link>
				</div>

				<div
					onClick={() => router.push('/checkout')}
					className="my-[5px] cursor-pointer"
				>
					<div className="flex items-center text-white py-[6px] px-[9px] border border-transparent hover:border hover:border-white rounded">
						<ShoppingCartIcon className="w-9 h-9" />
						<div className="flex flex-col items-start justify-center relative ml-1">
							<div className="absolute -top-2 -left-4 w-[22px] h-[22px] grid place-items-center bg-tangerine rounded-full">
								<span className="font-semibold leading-none text-[13px] text-rich-black-39 pt-px">
									{itemsCount}
								</span>
							</div>
							<span className="font-bold leading-none mt-3 invisible lg:visible">
								Cart
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="header__option">
				<Link href="/">
					<div className="flex items-center option__link">
						<MenuIcon className="w-6 h-6" />
						<span className="font-semibold ml-[2px]">All</span>
					</div>
				</Link>
				<Link href="/">
					<div className="option__link">
						<span className="capitalize">Best Sellers</span>
					</div>
				</Link>
				<Link href="/">
					<div className="option__link">
						<span className="capitalize">Amazon basics</span>
					</div>
				</Link>
				<Link href="/">
					<div className="option__link">
						<span className="capitalize">Customer services</span>
					</div>
				</Link>
				<Link href="/">
					<div className="option__link hidden md:inline-flex">
						<span className="capitalize">Today&apos;s deals</span>
					</div>
				</Link>
				<Link href="/">
					<div className="option__link hidden md:inline-flex">
						<span className="capitalize">Prime</span>
					</div>
				</Link>
				<Link href="/">
					<div className="option__link hidden md:inline-flex">
						<span className="capitalize">Music</span>
					</div>
				</Link>
				<Link href="/">
					<div className="option__link hidden lg:inline-flex">
						<span className="capitalize">Amazon home</span>
					</div>
				</Link>
				<Link href="/">
					<div className="option__link hidden lg:inline-flex">
						<span className="capitalize">Book</span>
					</div>
				</Link>
				<Link href="/">
					<div className="option__link hidden lg:inline-flex">
						<span className="capitalize">Registry</span>
					</div>
				</Link>
				<Link href="/">
					<div className="option__link hidden xl:inline-flex">
						<span className="capitalize">Fashion</span>
					</div>
				</Link>
				<Link href="/">
					<div className="option__link hidden xl:inline-flex">
						<span className="capitalize">Kindle Books</span>
					</div>
				</Link>
				<Link href="/">
					<div className="option__link hidden xl:inline-flex">
						<span className="capitalize">Gift cards</span>
					</div>
				</Link>
			</div>
		</header>
	)
}

export default Header
