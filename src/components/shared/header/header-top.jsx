'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import { routing } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import LocaleSwitcherSelect from './locale-switcher-select'

export default function HeaderTop() {
	const locale = useLocale()
	const t = useTranslations('Header')

	return (
		<div className='bg-white py-2 md:py-3'>
			<div className='flex justify-between items-center mx-auto px-4 container'>
				<ul className='flex items-center divide-x'>
					<li className='px-3 md:px-6'>
						<Link
							href='/'
							className='flex items-center'
						>
							<Image
								src='/social-icons/telegram.svg'
								width={20}
								height={20}
								alt='telegram'
								className='md:w-6 md:h-6'
							/>
						</Link>
					</li>
					<li className='hidden md:block px-6'>
						<Link
							href='/'
							className='hover:text-blue-600 text-sm md:text-base transition-colors'
						>
							{t('contacts')}
						</Link>
					</li>
				</ul>

				<div className='flex items-center gap-3 md:gap-6'>
					<Link
						href='/'
						className='block bg-[#1D5BD6] hover:bg-[#1a4fc7] px-4 md:px-8 py-2 md:py-3 rounded-lg font-medium text-white text-sm md:text-lg transition-colors'
					>
						<span className='hidden sm:inline'>{t('cabinet')}</span>
						<span className='sm:hidden'>{t('login')}</span>
					</Link>

					<LocaleSwitcherSelect defaultValue={locale}>
						{routing.locales.map((cur) => (
							<option
								key={cur}
								value={cur}
								className='cursor-pointer'
							>
								{cur}
							</option>
						))}
					</LocaleSwitcherSelect>
				</div>
			</div>
		</div>
	)
}
