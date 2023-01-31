import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Banner = () => {
	return (
		<div className="relative">
			<div className="absolute w-full h-24 lg:h-96 bg-gradient-to-t from-cultured to-transparent bottom-0 z-20"></div>
			<Carousel
				autoPlay
				infiniteLoop
				interval={60000}
				showStatus={false}
				showThumbs={false}
				showIndicators={false}
			>
				<div>
					<img src="/assets/banner/banner_01.jpg" alt="banner_01" />
				</div>
				<div>
					<img src="/assets/banner/banner_02.jpg" alt="banner_02" />
				</div>
				<div>
					<img src="/assets/banner/banner_03.jpg" alt="banner_03" />
				</div>
				<div>
					<img src="/assets/banner/banner_04.jpg" alt="banner_04" />
				</div>
				<div>
					<img src="/assets/banner/banner_05.jpg" alt="banner_05" />
				</div>
			</Carousel>
		</div>
	)
}

export default Banner
