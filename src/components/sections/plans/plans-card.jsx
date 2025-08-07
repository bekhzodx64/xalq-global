import Image from 'next/image'

export default function PlansCard({ icon, title, price, status }) {
	return (
		<div className='gap-4 grid bg-white p-6 border border-[#E5E7EB] rounded-xl min-w-[367px]'>
			<div className='flex justify-center items-center bg-[#1D5BD6] rounded-lg size-10'>
				<Image
					src={`/plans-icon/${icon}.svg`}
					width={24}
					height={24}
					alt='icon'
				/>
			</div>

			<h3 className='font-semibold text-[#111827] text-sm'>{title}</h3>

			<div className='gap-2 grid'>
				<div className='flex justify-between items-center'>
					<p className='font-medium text-[#6B7280] text-xs uppercase'>Тариф</p>
					<p className='font-bold text-[#2563EB] text-lg'>
						{price ? price : 0} руб
					</p>
				</div>
				<div className='flex justify-between items-center'>
					<p className='font-medium text-[#6B7280] text-xs uppercase'>
						Единица
					</p>
					<p className='font-medium text-[#374151] text-sm'>1 паллет / мес</p>
				</div>
				{status && (
					<div className='bg-[#EFF6FF] p-2 rounded-lg font-medium text-[#1D4ED8] text-xs'>
						{status}
					</div>
				)}
			</div>
			<button
				type='button'
				className='block hover:bg-[#1D5BD6] py-3.5 border border-[#1D5BD6] rounded-lg font-semibold text-[#1D5BD6] hover:text-white transition-all cursor-pointer'
			>
				Оставить заявку
			</button>
		</div>
	)
}
