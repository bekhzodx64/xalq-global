import Image from 'next/image'

export default function Questions() {
	return (
		<section className='bg-[#1D5BD6] py-8 md:py-10 lg:py-12 rounded-t-3xl md:rounded-t-4xl'>
			<div className='mx-auto px-4 container'>
				<div className='items-center gap-6 md:gap-8 lg:gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{/* Заголовок */}
					<div className='md:text-left text-center'>
						<h2 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl leading-tight'>
							Остались вопросы?
						</h2>
					</div>

					{/* Описание */}
					<div className='md:text-left text-center'>
						<p className='font-medium text-white text-base md:text-lg leading-relaxed'>
							Наша команда здесь, чтобы помочь. Мы работаем круглосуточно и без
							выходных, чтобы сделать ваше пребывание максимально комфортным.
						</p>
					</div>

					{/* Кнопка */}
					<div className='flex justify-center md:justify-end'>
						<button
							type='button'
							className='flex items-center gap-2 md:gap-2.5 bg-[#FFB339] hover:bg-[#e6a233] shadow-lg hover:shadow-xl px-6 md:px-9 py-4 md:py-6 rounded-xl text-white text-base md:text-lg lg:text-xl transition-colors duration-200 cursor-pointer'
						>
							<span className='whitespace-nowrap'>Связаться с нами</span>
							<Image
								src='/icons/arrow-icon.svg'
								width={20}
								height={20}
								alt='icon'
								className='md:w-6 md:h-6'
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
