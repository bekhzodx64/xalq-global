import Image from 'next/image'
import Link from 'next/link'

export default function Intro() {
	return (
		<section className='flex flex-col justify-center bg-[#1D5BD6] min-h-[75dvh]'>
			<div className='flex items-center mx-auto container'>
				<div>
					<div className='mb-6'>
						<span className='bg-[#DBEAFE] px-4 py-1.5 rounded-full font-medium text-[#1D4ED8] text-sm'>
							Международная доставка
						</span>
					</div>

					<div className='max-w-[650px]'>
						<p className='relative font-bold text-[40px] text-white leading-none'>
							Официальная доставка коммерческих сборных грузов по направлению
							<Image
								src='/icons/return.svg'
								width={90}
								height={50}
								alt='icon'
								className='right-2/5 bottom-0 absolute translate-x-1/2 translate-y-1/5'
							/>
						</p>

						<div>
							<Image
								src='/icons/route.svg'
								width={459}
								height={42}
								alt='icon'
							/>
						</div>

						<p className='mt-2.5 text-white text-xl'>
							Работаем с юридическими и физическими лицами.
						</p>
					</div>

					<div className='flex gap-4 mt-14'>
						<Link
							href='/'
							className='inline-block bg-[#FFB339] px-8 py-3.5 rounded-lg font-semibold text-white'
						>
							Зарегистрироваться
						</Link>
						<Link
							href='#contact-form'
							className='inline-block px-8 py-3.5 border border-white rounded-lg font-semibold text-white'
						>
							Рассчитать стоимость
						</Link>
					</div>
				</div>

				<div className='relative ml-auto w-full max-w-xl h-full max-h-[442px] aspect-square'>
					<Image
						src='/images/intro-bg.png'
						quality={100}
						alt='image'
						className='object-cover'
						priority
						fill
					/>
				</div>
			</div>
		</section>
	)
}
