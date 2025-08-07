import Link from 'next/link'

export default function FooterBasement() {
	return (
		<div className='flex flex-col items-center gap-3 bg-[#1F2148] py-2.5 text-[#4F5283]'>
			<p>© 2024,  Все Права зашишена</p>

			<ul className='flex divide-x text-sm'>
				<li className='px-4'>
					<Link href='/'>Правила и Условия</Link>
				</li>
				<li className='px-4'>
					<Link href='/'>Политика Конфиденциальности</Link>
				</li>
				<li className='px-4'>
					<Link href='/'>Политика Доставки</Link>
				</li>
			</ul>
		</div>
	)
}
