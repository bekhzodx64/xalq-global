import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function PricesCard({
	sale,
	position,
	oldPrice,
	oldPriceValue,
	count,
	newPrice,
}) {
	const t = useTranslations('Prices')

	return (
		<div
			className={`${position === 'center' && '2xl:translate-y-[130px] '} ${
				position === 'pre' && '2xl:translate-y-[100px] '
			} relative flex flex-col items-center gap-4 md:gap-6 bg-white px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-10 border border-[#D4D4D4B5]/70 rounded-xl md:rounded-2xl w-full max-w-[280px] hover:shadow-lg transition-shadow duration-200`}
		>
			{sale && (
				<span className='top-0 absolute bg-[#FD1A1D] px-4 md:px-6 lg:px-9 py-2 md:py-3 lg:py-3.5 rounded-full font-bold text-white text-xs md:text-sm -translate-y-1/2'>
					{t('sale')}
				</span>
			)}

			<Image
				src='/prices-icon/box.svg'
				width={60}
				height={60}
				alt='box'
				className='md:w-20 lg:w-[79px] md:h-20 lg:h-[78px]'
			/>

			<div className='text-center'>
				<h3 className='font-bold text-[#1F2148] text-lg md:text-xl lg:text-2xl'>
					{count} {t('palleta')}
				</h3>
				<p className='bg-clip-text bg-gradient-to-r from-[#FFB339] to-[#F7751E] text-transparent text-xs'>
					⚡{t('top')}
				</p>
			</div>

			<div className='flex flex-col items-center'>
				<p
					className={`${
						!oldPrice && 'h-4'
					} relative font-medium text-[#444444] text-xs`}
				>
					{oldPrice && (
						<>
							{oldPriceValue}$
							<span className='top-1/2 left-0 absolute bg-red-500 w-9 h-0.5 -rotate-6 -translate-x-[8%] -translate-y-1/2'></span>
						</>
					)}
				</p>
				<p className='bg-clip-text bg-gradient-to-r from-[#FFB339] to-[#F7751E] font-extrabold text-transparent text-2xl md:text-3xl lg:text-4xl'>
					{newPrice} $
				</p>
				<p className='text-[#1F2148] text-sm md:text-base'>{t('forPalleta')}</p>
			</div>
		</div>
	)
}
