import Image from 'next/image'

export default function Questions() {
	return (
		<section className='bg-[#1D5BD6] py-12 rounded-t-4xl'>
			<div className='items-center grid grid-cols-3 mx-auto container'>
				<div>
					<h2 className='font-bold text-white text-4xl'>Остались вопросы?</h2>
				</div>
				<div>
					<p className='font-medium text-white text-lg'>
						Наша команда здесь, чтобы помочь. Мы работаем круглосуточно и без
						выходных, чтобы сделать ваше пребывание максимально комфортным.
					</p>
				</div>

				<div className='flex flex-col items-end'>
					<button
						type='button'
						className='flex items-center gap-2.5 bg-[#FFB339] px-9 py-6 rounded-xl text-white text-xl cursor-pointer'
					>
						Связаться с нами
						<Image
							src='/icons/arrow-icon.svg'
							width={24}
							height={24}
							alt='icon'
						/>
					</button>
				</div>
			</div>
		</section>
	)
}
