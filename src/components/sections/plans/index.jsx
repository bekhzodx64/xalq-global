import { useTranslations } from 'next-intl'
import PlansCard from './plans-card'

export default function Plans() {
	const t = useTranslations('Plans')
	return (
		<section
			className='bg-[#1D5BD6] mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-10 pb-6 md:pb-8 rounded-xl md:rounded-2xl max-w-[1216px] scroll-mt-[140px] container'
			id='plans'
		>
			<div className='gap-6 md:gap-8 grid'>
				<h2 className='font-semibold text-white lg:text-[32px] text-2xl md:text-3xl text-center leading-tight'>
					{t('title')}
				</h2>

				<div className='gap-4 md:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
					<PlansCard
						icon='1'
						title={t('plan1title')}
						price='500'
						quantity={t('plan1qnty')}
						status={t('plan1status')}
					/>
					<PlansCard
						icon='2'
						title={t('plan2title')}
						price='10000'
						quantity={t('plan3qnty')}
					/>
					<PlansCard
						icon='3'
						title={t('plan3title')}
						price='90'
						quantity={t('plan3qnty')}
					/>
					<PlansCard
						icon='4'
						title={t('plan4title')}
						price='180'
						quantity={t('plan4qnty')}
					/>
					<PlansCard
						icon='5'
						title={t('plan5title')}
						price='45'
						quantity={t('plan6qnty')}
						status={t('plan3status')}
					/>
					<PlansCard
						icon='6'
						title={t('plan6title')}
						price='1000'
						quantity={t('plan3qnty')}
						status={t('plan4status')}
					/>
					<PlansCard
						icon='7'
						title={t('plan7title')}
						price='270'
						quantity={t('plan5qnty')}
						status={t('plan5status')}
					/>
					<PlansCard
						icon='8'
						title={t('plan8title')}
						price='90'
						quantity={t('plan7qnty')}
					/>
					<PlansCard
						icon='9'
						title={t('plan9title')}
						price='270'
						quantity={t('plan3qnty')}
					/>
					<PlansCard
						icon='10'
						title={t('plan10title')}
						price='360'
						quantity={t('plan2qnty')}
						status={t('plan6status')}
					/>
				</div>
			</div>
		</section>
	)
}
