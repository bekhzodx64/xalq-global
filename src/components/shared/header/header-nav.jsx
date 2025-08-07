'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function HeaderNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className='relative bg-[#F1F2F4] py-3'>
			<div className='flex justify-between items-center mx-auto px-4 container'>
				<div>
					<Link href='/'>
						<Image
							src='/logo.svg'
							width={121}
							height={40}
							alt='logo'
							className='w-20 md:w-auto'
						/>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<ul className='hidden md:flex items-center gap-8 lg:gap-12'>
					<li>
						<Link
							href='#prices'
							className='font-medium hover:text-blue-600 transition-colors'
						>
							Тарифы на доставку
						</Link>
					</li>
					<li>
						<Link
							href='#plans'
							className='font-medium hover:text-blue-600 transition-colors'
						>
							Услуги
						</Link>
					</li>
					<li>
						<Link
							href='#contact-form'
							className='font-medium hover:text-blue-600 transition-colors'
						>
							Бесплатный расчет
						</Link>
					</li>
				</ul>

				<button
					onClick={toggleMenu}
					className='md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8'
					aria-label='Toggle menu'
				>
					<span
						className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
							isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
						}`}
					></span>
					<span
						className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
							isMenuOpen ? 'opacity-0' : ''
						}`}
					></span>
					<span
						className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
							isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
						}`}
					></span>
				</button>
			</div>

			<div
				className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
					isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
			>
				<ul className='flex flex-col space-y-4 px-4 py-4'>
					<li>
						<Link
							href='#prices'
							className='block py-2 font-medium hover:text-blue-600 transition-colors'
							onClick={() => setIsMenuOpen(false)}
						>
							Тарифы на доставку
						</Link>
					</li>
					<li>
						<Link
							href='#plans'
							className='block py-2 font-medium hover:text-blue-600 transition-colors'
							onClick={() => setIsMenuOpen(false)}
						>
							Услуги
						</Link>
					</li>
					<li>
						<Link
							href='#contact-form'
							className='block py-2 font-medium hover:text-blue-600 transition-colors'
							onClick={() => setIsMenuOpen(false)}
						>
							Бесплатный расчет
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
