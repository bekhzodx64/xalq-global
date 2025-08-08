import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function FormInfo() {
	const t = useTranslations('Form')

	return (
		<div className='flex flex-col justify-center gap-4 md:gap-6 w-full lg:max-w-[535px] lg:text-left text-center'>
			<div>
				<span className='inline-flex items-center gap-2 bg-[#DBEAFE] px-3 md:px-4 py-2 rounded-full font-medium text-[#1E40AF] text-xs md:text-sm'>
					<Image
						src='/icons/calculator.svg'
						width={12}
						height={14}
						alt='calculator'
						className='md:w-3.5 md:h-4'
					/>
					{t('badge')}
				</span>
			</div>
			<h2 className='font-bold text-[#111827] text-2xl md:text-3xl lg:text-4xl leading-none'>
				{t('title')}
			</h2>
			<ul className='gap-2 grid text-[#6B7280] text-sm md:text-base'>
				<li className='flex items-center gap-2 md:gap-3'>
					<Image
						src='/icons/list-marker.svg'
						width={16}
						height={16}
						alt='marker'
						className='flex-shrink-0 md:w-5 md:h-5'
					/>
					<span>{t('list1')}</span>
				</li>
				<li className='flex items-center gap-2 md:gap-3'>
					<Image
						src='/icons/list-marker.svg'
						width={16}
						height={16}
						alt='marker'
						className='flex-shrink-0 md:w-5 md:h-5'
					/>
					<span>{t('list2')}</span>
				</li>
				<li className='flex items-center gap-2 md:gap-3'>
					<Image
						src='/icons/list-marker.svg'
						width={16}
						height={16}
						alt='marker'
						className='flex-shrink-0 md:w-5 md:h-5'
					/>
					<span>{t('list3')}</span>
				</li>
			</ul>
		</div>
	)
}
