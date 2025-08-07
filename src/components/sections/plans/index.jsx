import PlansCard from './plans-card'

export default function Plans() {
	return (
		<section
			className='bg-[#1D5BD6] mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-10 pb-6 md:pb-8 rounded-xl md:rounded-2xl max-w-[1216px] scroll-mt-[140px] container'
			id='plans'
		>
			<div className='gap-6 md:gap-8 grid'>
				<h2 className='font-semibold text-white lg:text-[32px] text-2xl md:text-3xl text-center leading-tight'>
					Тарифы на складские услуги
				</h2>

				<div className='gap-4 md:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
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
			</div>
		</section>
	)
}
