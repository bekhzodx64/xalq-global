import Image from 'next/image'

export default function FormInfo() {
	return (
		<div className='flex flex-col justify-center gap-6 max-w-[535px]'>
			<div>
				<span className='inline-flex items-center gap-2 bg-[#DBEAFE] px-4 py-2 rounded-full font-medium text-[#1E40AF] text-sm'>
					<Image
						src='/icons/calculator.svg'
						width={14}
						height={16}
						alt='calculator'
					/>
					Бесплатный расчет
				</span>
			</div>
			<h2 className='font-bold text-[#111827] text-4xl'>
				Оставьте заявку — мы рассчитаем доставку под ваш груз
			</h2>
			<ul className='*:flex *:items-center gap-2 *:gap-3 grid text-[#6B7280]'>
				<li>
					<Image
						src='/icons/list-marker.svg'
						width={20}
						height={20}
						alt='marker'
					/>
					Индивидуальный расчет стоимости
				</li>
				<li>
					<Image
						src='/icons/list-marker.svg'
						width={20}
						height={20}
						alt='marker'
					/>
					Консультация специалиста
				</li>
				<li>
					<Image
						src='/icons/list-marker.svg'
						width={20}
						height={20}
						alt='marker'
					/>
					Ответ в течение 30 минут
				</li>
			</ul>
		</div>
	)
}
