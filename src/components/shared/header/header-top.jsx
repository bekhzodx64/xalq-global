import Image from 'next/image'
import Link from 'next/link'

export default function HeaderTop() {
	return (
		<div className='bg-white py-3'>
			<div className='flex justify-between items-center mx-auto container'>
				<ul className='flex items-center divide-x'>
					<li className='px-6'>
						<Link href='/'>
							<Image
								src='/social-icons/telegram.svg'
								width={24}
								height={24}
								alt='telegram'
							/>
						</Link>
					</li>
					<li className='px-6'>
						<Link href='/'>Контакты</Link>
					</li>
				</ul>

				<div className='flex items-center gap-6'>
					<Link
						href='/'
						className='block bg-[#1D5BD6] px-8 py-3 rounded-lg font-medium text-white text-lg'
					>
						Личный кабинет
					</Link>

					<button
						type='button'
						className='flex items-center uppercase cursor-pointer'
					>
						<p>en</p>
						<Image
							src='/icons/chevron-down.svg'
							width={24}
							height={24}
							alt='icon'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}
