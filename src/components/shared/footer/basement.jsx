import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function FooterBasement() {
	const t = useTranslations('Footer')

	const currYear = new Date().getFullYear()

	return (
		<div className='flex flex-col items-center gap-3 bg-[#1F2148] px-4 py-4 md:py-2.5 text-[#4F5283]'>
			<p className='text-sm md:text-base text-center'>
				© {currYear}, {t('rights')}
			</p>

			<ul className='flex sm:flex-row flex-col sm:divide-x divide-y sm:divide-y-0 text-xs sm:text-sm text-center'>
				<li className='sm:px-4 py-2 sm:py-0'>
					<Link
						href='/'
						className='hover:text-white transition-colors'
					>
						{t('rules')}
					</Link>
				</li>
				<li className='sm:px-4 py-2 sm:py-0'>
					<Link
						href='/'
						className='hover:text-white transition-colors'
					>
						{t('policy')}
					</Link>
				</li>
				<li className='sm:px-4 py-2 sm:py-0'>
					<Link
						href='/'
						className='hover:text-white transition-colors'
					>
						{t('delivery')}
					</Link>
				</li>
			</ul>
		</div>
	)
}
