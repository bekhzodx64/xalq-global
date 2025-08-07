import Image from 'next/image'

export default function PricesCard({ sale, position, oldPrice }) {
	return (
		<div
			className={`${position === 'center' && 'translate-y-[130px]'} ${
				position === 'pre' && 'translate-y-[100px]'
			} relative flex flex-col items-center gap-6 bg-white px-12 py-10 border border-[#D4D4D4B5]/70 rounded-2xl max-w-[230px]`}
		>
			{sale && (
				<span className='top-0 absolute bg-[#FD1A1D] px-9 py-3.5 rounded-full font-bold text-white -translate-y-1/2'>
					Скидка
				</span>
			)}

			<Image
				src='/prices-icon/box.svg'
				width={79}
				height={78}
				alt='box'
			/>

			<div>
				<h3 className='font-bold text-[#1F2148] text-2xl'>5-8 паллет</h3>
				<p className='bg-clip-text bg-gradient-to-r from-[#FFB339] to-[#F7751E] text-transparent text-xs'>
					⚡Популярный выбор
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
							250$
							<span className='top-1/2 left-0 absolute bg-red-500 w-9 h-0.5 -rotate-6 -translate-x-[8%] -translate-y-1/2'></span>
						</>
					)}
				</p>
				<p className='bg-clip-text bg-gradient-to-r from-[#FFB339] to-[#F7751E] font-extrabold text-transparent text-4xl'>
					175 $
				</p>
				<p className='text-[#1F2148]'>за паллету</p>
			</div>
		</div>
	)
}
