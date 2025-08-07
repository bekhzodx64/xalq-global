import Image from 'next/image'
import PricesCard from './prices-card'

export default function Prices() {
	return (
		<section
			className='flex flex-col gap-6 md:gap-7 mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-14 pb-20 md:pb-32 lg:pb-52 scroll-mt-[140px] container'
			id='prices'
		>
			<div className='flex sm:flex-row flex-col gap-4 md:gap-8 lg:gap-12 bg-gradient-to-r from-[#e2e4e7] to-[#eaecf0] mx-auto px-4 md:px-6 lg:px-8 py-4 border border-white/20 rounded-xl md:rounded-2xl max-w-[400px] md:max-w-[500px] lg:max-w-[600px]'>
				<div className='flex justify-start items-center gap-2 md:gap-3'>
					<Image
						src='/prices-icon/1.svg'
						width={32}
						height={32}
						alt='icon'
						className='md:w-12 md:h-12'
					/>
					<div>
						<h3 className='font-bold text-[#1F2148] text-sm md:text-base'>
							Евро паллета
						</h3>
						<p className='text-xs'>120×80 см</p>
					</div>
				</div>
				<div className='flex justify-start items-center gap-2 md:gap-3'>
					<Image
						src='/prices-icon/2.svg'
						width={32}
						height={32}
						alt='icon'
						className='md:w-12 md:h-12'
					/>
					<div>
						<h3 className='font-bold text-[#1F2148] text-sm md:text-base'>
							Вес
						</h3>
						<p className='text-xs'>до 600 кг</p>
					</div>
				</div>
			</div>

			<h2 className='bg-[#1D5BD6] mx-auto py-4 md:py-[18px] rounded-xl md:rounded-2xl w-full max-w-[740px] font-semibold text-white lg:text-[32px] text-xl md:text-2xl text-center'>
				Тарифы на доставку
			</h2>

			<div className='place-items-center gap-4 md:gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-auto 2xl:pt-0 xl:pt-5 w-full max-w-[1280px] 2xl:-translate-y-[105px]'>
				<PricesCard
					oldPrice={false}
					sale={false}
				/>
				<PricesCard
					oldPrice={true}
					sale={false}
					position='pre'
				/>
				<PricesCard
					oldPrice={true}
					sale={true}
					position='center'
				/>
				<PricesCard
					oldPrice={false}
					sale={false}
					position='pre'
				/>
				<PricesCard
					oldPrice={false}
					sale={false}
				/>
			</div>
		</section>
	)
}
