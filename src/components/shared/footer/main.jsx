import Image from 'next/image'
import Link from 'next/link'
import PaymentCard from './payment-card'

export default function FooterMain() {
	return (
		<div className='bg-white py-16'>
			<div className='grid grid-cols-3 mx-auto container'>
				<div>
					<Image
						src='/logo.svg'
						width={212}
						height={70}
						alt='logo'
					/>
				</div>

				<div className='flex flex-col gap-4'>
					<h3 className='font-medium'>Мы принимаем</h3>

					<div className='gap-2 grid grid-cols-4 *:border *:border-[#f4f4f4] *:rounded-lg'>
						<PaymentCard logo='mastercard' />
						<PaymentCard logo='visa' />
						<PaymentCard logo='express' />
						<PaymentCard logo='mastercard' />
						<PaymentCard logo='visa' />
						<PaymentCard logo='express' />
					</div>
				</div>

				<div className='gap-6 grid ml-auto max-w-96 font-medium'>
					<div>
						<h3>Адрес:</h3>
						<p className='text-lg text-balance'>
							Офис в Ташкенте: Узбекистан, 7-й проезд Сайрам, дом № 17
						</p>
					</div>
					<div>
						<h3>Электронная почта:</h3>
						<p className='text-lg'>
							<Link
								href='mailto:support@xalq.global'
								className='underline'
							>
								support@xalq.global
							</Link>
						</p>
					</div>
					<div>
						<h3>Телефон:</h3>
						<p className='text-lg'>
							<Link href='tel:+998656546554'>+978 65 654 65 54</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
