'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { useParams } from 'next/navigation'

export default function LocaleSwitcherSelect({ children, defaultValue }) {
	const router = useRouter()
	const pathname = usePathname()
	const params = useParams()

	function onSelectChange(event) {
		const nextLocale = event.target.value
		router.replace({ pathname, params }, { locale: nextLocale, scroll: false })
	}

	return (
		<label className={'relative'}>
			<select
				className='inline-flex py-3 pl-2 outline-none uppercase cursor-pointer'
				defaultValue={defaultValue}
				onChange={onSelectChange}
			>
				{children}
			</select>
		</label>
	)
}
