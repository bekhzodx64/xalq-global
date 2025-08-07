import Image from 'next/image'

export default function PaymentCard({ logo }) {
	return (
		<div className='relative w-full h-8 md:h-10 lg:h-12 aspect-video'>
			<Image
				src={`/payments/${logo}.svg`}
				alt={logo}
				fill
				className='object-contain'
			/>
		</div>
	)
}
