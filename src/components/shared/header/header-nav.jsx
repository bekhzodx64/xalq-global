import Image from 'next/image'
import Link from 'next/link'

export default function HeaderNav() {
	return (
		<div className='bg-[#F1F2F4] py-3'>
			<div className='flex justify-between items-center mx-auto container'>
				<div>
					<Link href='/'>
						<Image
							src='/logo.svg'
							width={121}
							height={40}
							alt='logo'
						/>
					</Link>
				</div>

				<ul className='flex items-center gap-12'>
					<li>
						<Link href='#prices'>Тарифы на доставку</Link>
					</li>
					<li>
						<Link href='#plans'>Услуги</Link>
					</li>
					<li>
						<Link href='#contact-form'>Бесплатный расчет</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
