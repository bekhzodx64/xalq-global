import Image from 'next/image'
import PricesCard from './prices-card'

export default function Prices() {
	return (
		<section
			className='flex flex-col gap-7 mx-auto pt-14 pb-52 scroll-mt-[140px] container'
			id='prices'
		>
			<div className='flex gap-12 bg-gradient-to-r from-[#e2e4e7] to-[#eaecf0] mx-auto px-8 py-4 border border-white/20 rounded-2xl max-w-[400px]'>
				<div className='flex items-center gap-3'>
					<Image
						src='/prices-icon/1.svg'
						width={48}
						height={48}
						alt='icon'
					/>
					<div>
						<h3 className='font-bold text-[#1F2148]'>Евро паллета</h3>
						<p className='text-xs'>120×80 см</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<Image
						src='/prices-icon/2.svg'
						width={48}
						height={48}
						alt='icon'
					/>
					<div>
						<h3 className='font-bold text-[#1F2148]'>Вес</h3>
						<p className='text-xs'>до 600 кг</p>
					</div>
				</div>
			</div>

			<h2 className='bg-[#1D5BD6] mx-auto py-[18px] rounded-2xl w-full max-w-[740px] font-semibold text-[32px] text-white text-center'>
				Тарифы на доставку
			</h2>

			<div className='place-items-center grid grid-cols-5 mx-auto -mt-[113px] w-full max-w-[1280px]'>
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
