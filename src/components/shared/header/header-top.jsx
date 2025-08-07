import Image from 'next/image'
import Link from 'next/link'

export default function HeaderTop() {
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
							Контакты
						</Link>
					</li>
				</ul>

				<div className='flex items-center gap-3 md:gap-6'>
					<Link
						href='/'
						className='block bg-[#1D5BD6] hover:bg-[#1a4fc7] px-4 md:px-8 py-2 md:py-3 rounded-lg font-medium text-white text-sm md:text-lg transition-colors'
					>
						<span className='hidden sm:inline'>Личный кабинет</span>
						<span className='sm:hidden'>Войти</span>
					</Link>

					<button
						type='button'
						className='flex items-center hover:text-blue-600 text-sm md:text-base uppercase transition-colors cursor-pointer'
					>
						<p>en</p>
						<Image
							src='/icons/chevron-down.svg'
							width={16}
							height={16}
							alt='icon'
							className='md:w-6 md:h-6'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}
