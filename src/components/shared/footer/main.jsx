import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import PaymentCard from './payment-card'

export default function FooterMain() {
	const t = useTranslations('Footer')

	return (
		<div className='bg-white py-8 md:py-12 lg:py-16'>
			<div className='mx-auto px-4 container'>
				<div className='gap-8 lg:gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					<div className='md:block flex justify-center'>
						<Image
							src='/logo.svg'
							width={212}
							height={70}
							alt='logo'
						/>
					</div>

					<div className='flex flex-col gap-4'>
						<h3 className='font-medium md:text-left text-center'>
							{t('payments')}
						</h3>

						<div className='gap-2 grid grid-cols-3 md:grid-cols-4 mx-auto md:mx-0 *:border *:border-[#f4f4f4] *:rounded-lg max-w-xs'>
							<PaymentCard logo='mastercard' />
							<PaymentCard logo='visa' />
							<PaymentCard logo='uzum' />
							<PaymentCard logo='click' />
							<PaymentCard logo='mir' />
							<PaymentCard logo='tbank' />
						</div>
					</div>

					<div className='gap-4 md:gap-6 grid md:col-span-2 lg:col-span-1 lg:ml-auto lg:max-w-96 font-medium md:text-left text-center'>
						<div>
							<h3 className='text-sm md:text-base'>{t('address')}</h3>
							<p className='text-sm md:text-base lg:text-lg text-balance'>
								{t('location')}
							</p>
						</div>
						<div>
							<h3 className='text-sm md:text-base'>{t('email')}</h3>
							<p className='text-sm md:text-base lg:text-lg'>
								<Link
									href='mailto:support@xalq.global'
									className='underline'
								>
									support@xalq.global
								</Link>
							</p>
						</div>
						<div>
							<h3 className='text-sm md:text-base'>{t('tel')}</h3>
							<p className='text-sm md:text-base lg:text-lg'>
								<Link href='tel:+998781138555'>+998 (78) 113-85-55</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
