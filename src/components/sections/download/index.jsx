import Image from 'next/image'
import Link from 'next/link'
import MediaLink from './media-link'

export default function Download() {
	return (
		<section className='bg-[#F5F5F5] py-6'>
			<div className='flex justify-between mx-auto container'>
				<div className='gap-2 grid'>
					<h2 className='font-medium'>Скачивайте прямо сейчас</h2>

					<div className='flex gap-12'>
						<Link href='/'>
							<Image
								src='/buttons/app-store.svg'
								width={271}
								height={84}
								alt='app-store'
							/>
						</Link>

						<Link href='/'>
							<Image
								src='/buttons/google-play.svg'
								width={271}
								height={84}
								alt='google-play'
							/>
						</Link>
					</div>
				</div>

				<div className='flex flex-col gap-2 w-full max-w-xs'>
					<h2>Следуйте за нами</h2>

					<div className='gap-5 grid grid-cols-6'>
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
		</section>
	)
}
