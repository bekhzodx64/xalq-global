import Image from 'next/image'
import Link from 'next/link'
import MediaLink from './media-link'

export default function Download() {
	return (
		<section className='bg-[#F5F5F5] py-6 md:py-8 lg:py-12'>
			<div className='mx-auto px-4 container'>
				<div className='flex lg:flex-row flex-col justify-between gap-8 lg:gap-12'>
					{/* Секция с кнопками скачивания */}
					<div className='flex flex-col gap-4 md:gap-6 lg:text-left text-center'>
						<h2 className='font-medium'>Скачивайте прямо сейчас</h2>

						<div className='flex sm:flex-row flex-col justify-center lg:justify-start items-center gap-4 md:gap-8'>
							<Link
								href='/'
								className='hover:opacity-80 transition-opacity'
							>
								<Image
									src='/buttons/app-store.svg'
									width={271}
									height={84}
									alt='app-store'
									className='w-48 md:w-56 lg:w-auto h-auto'
								/>
							</Link>

							<Link
								href='/'
								className='hover:opacity-80 transition-opacity'
							>
								<Image
									src='/buttons/google-play.svg'
									width={271}
									height={84}
									alt='google-play'
									className='w-48 md:w-56 lg:w-auto h-auto'
								/>
							</Link>
						</div>
					</div>

					{/* Секция с социальными сетями */}
					<div className='flex flex-col gap-4 md:gap-6 w-full lg:max-w-xs lg:text-left text-center'>
						<h2 className='font-medium'>Следуйте за нами</h2>

						<div className='gap-4 md:gap-5 grid grid-cols-3 sm:grid-cols-6 mx-auto lg:mx-0 max-w-xs'>
							<MediaLink
								link='/'
								logo='facebook'
							/>
							<MediaLink
								link='/'
								logo='instagram'
							/>
							<MediaLink
								link='/'
								logo='telegram'
							/>
							<MediaLink
								link='/'
								logo='youtube'
							/>
							<MediaLink
								link='/'
								logo='linkedin'
							/>
							<MediaLink
								link='/'
								logo='tiktok'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
