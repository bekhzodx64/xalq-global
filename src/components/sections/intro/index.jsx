import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function Intro() {
	const t = useTranslations('Intro')

	return (
		<section className='flex flex-col justify-center bg-[#1D5BD6] py-8 md:py-12 lg:py-16 min-h-[75dvh]'>
			<div className='mx-auto px-4 md:px-6 lg:px-8 container'>
				<div className='flex lg:flex-row flex-col items-center gap-8 lg:gap-12'>
					<div className='w-full lg:w-1/2 lg:text-left text-center'>
						<div className='mb-4 md:mb-6'>
							<span className='inline-block bg-[#DBEAFE] px-3 md:px-4 py-1 md:py-1.5 rounded-full font-medium text-[#1D4ED8] text-xs md:text-sm'>
								{t('badge')}
							</span>
						</div>

						<div className='mx-auto lg:mx-0 max-w-[650px]'>
							<p className='relative mb-4 md:mb-6 font-bold text-white xl:text-[40px] text-2xl md:text-3xl lg:text-4xl leading-tight'>
								{t('mainTitle')}
								<Image
									src='/icons/return.svg'
									width={60}
									height={35}
									alt='icon'
									className='hidden sm:block sm:right-1/5 md:right-[5%] lg:-right-[5%] 2xl:right-2/5 xl:right-[10%] sm:bottom-1/12 lg:bottom-[5%] xl:bottom-[5%] absolute w-12 md:w-16 lg:w-[90px] h-7 md:h-9 lg:h-[50px] translate-x-1/2 translate-y-1/5'
								/>
							</p>

							<div className='mb-4 md:mb-6'>
								<Image
									src='/icons/route.svg'
									width={300}
									height={30}
									alt='icon'
									className='mx-auto lg:mx-0 w-full max-w-[300px] md:max-w-[400px] lg:max-w-[459px] h-auto'
								/>
							</div>

							<p className='mb-8 md:mb-10 lg:mb-14 text-white text-base md:text-lg lg:text-xl'>
								{t('subtitle')}
							</p>
						</div>

						<div className='flex sm:flex-row flex-col justify-center lg:justify-start gap-3 md:gap-4'>
							<Link
								href='/'
								className='inline-block bg-[#FFB339] hover:bg-[#e6a233] px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-semibold text-white text-sm md:text-base transition-colors duration-200'
							>
								{t('authorization')}
							</Link>
							<Link
								href='#contact-form'
								className='inline-block hover:bg-white px-6 md:px-8 py-3 md:py-3.5 border border-white rounded-lg font-semibold text-white hover:text-[#1D5BD6] text-sm md:text-base transition-colors duration-200'
							>
								{t('calculate')}
							</Link>
						</div>
					</div>

					<div className='relative w-full lg:w-1/2 max-w-lg lg:max-w-xl h-64 md:h-80 lg:h-96 xl:h-[442px] aspect-square lg:aspect-auto'>
						<Image
							src='/images/intro-bg.png'
							quality={100}
							alt='image'
							className='rounded-lg lg:rounded-none object-cover'
							priority
							fill
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
