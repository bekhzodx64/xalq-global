import Image from 'next/image'

export default function PlansCard({ icon, title, price, quantity, status }) {
	return (
		<div className='gap-3 md:gap-4 grid bg-white hover:shadow-lg p-4 md:p-6 border border-[#E5E7EB] rounded-lg md:rounded-xl w-full max-w-[367px] transition-shadow duration-200'>
			<div className='flex justify-center items-center bg-[#1D5BD6] rounded-lg size-8 md:size-10'>
				<Image
					src={`/plans-icon/${icon}.svg`}
					width={20}
					height={20}
					alt='icon'
					className='md:w-6 md:h-6'
				/>
			</div>

			<h3 className='font-semibold text-[#111827] text-xs md:text-sm leading-tight'>
				{title}
			</h3>

			<div className='gap-2 grid'>
				<div className='flex justify-between items-center'>
					<p className='font-medium text-[#6B7280] text-xs uppercase'>Тариф</p>
					<p className='font-bold text-[#2563EB] text-base md:text-lg'>
						{price ? price : 0} руб
					</p>
				</div>
				<div className='flex justify-between items-center'>
					<p className='font-medium text-[#6B7280] text-xs uppercase'>
						Единица
					</p>
					<p className='font-medium text-[#374151] text-xs md:text-sm'>
						{quantity}
					</p>
				</div>
				{status && (
					<div className='bg-[#EFF6FF] p-2 rounded-lg font-medium text-[#1D4ED8] text-xs'>
						{status}
					</div>
				)}
			</div>
			<button
				type='button'
				className='block hover:bg-[#1D5BD6] py-3 md:py-3.5 border border-[#1D5BD6] rounded-lg font-semibold text-[#1D5BD6] hover:text-white text-sm md:text-base transition-all duration-200 cursor-pointer'
			>
				Оставить заявку
			</button>
		</div>
	)
}
