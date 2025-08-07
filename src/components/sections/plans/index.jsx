import PlansCard from './plans-card'

export default function Plans() {
	return (
		<section
			className='gap-8 grid bg-[#1D5BD6] mx-auto px-8 pt-10 pb-8 rounded-2xl max-w-[1216px] scroll-mt-[140px] container'
			id='plans'
		>
			<h2 className='font-semibold text-[32px] text-white text-center'>
				Тарифы на складские услуги
			</h2>

			<div className='flex flex-wrap justify-center gap-6'>
				<PlansCard
					icon='1'
					title='Ответственное хранение'
					price='500'
					quantity='1 паллет / мес'
					status='Стандартный паллет'
				/>
				<PlansCard
					icon='2'
					title='Декларация'
					price='10000'
					quantity='шт.'
					status='Зависит от груза'
				/>
				<PlansCard
					icon='3'
					title='Ввод в базу'
					price='90'
					quantity='паллет'
					status='До 2.5 тонн'
				/>
				<PlansCard
					icon='4'
					title='Выписка накладной'
					price='180'
					quantity='документ'
					status='Упаковка, проверка'
				/>
				<PlansCard
					icon='5'
					title='Взвешивание'
					price='45'
					quantity='позиция'
					status='Поврежденный груз'
				/>
				<PlansCard
					icon='6'
					title='Работа персонала'
					price='1000'
					quantity='час'
					status='Если нет в системе'
				/>
				<PlansCard
					icon='7'
					title='Приемка паллета'
					price='270'
					quantity='паллет'
					status=''
				/>
				<PlansCard
					icon='8'
					title='Обмотка пленкой'
					price='90'
					quantity='паллет'
				/>
				<PlansCard
					icon='9'
					title='Отгрузка паллета'
					price='270'
					quantity='паллет'
				/>
				<PlansCard
					icon='10'
					title='Акт с фотофиксацией'
					price='360'
					quantity='акт'
				/>
			</div>
		</section>
	)
}
