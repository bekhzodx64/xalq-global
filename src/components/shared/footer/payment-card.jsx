import Image from 'next/image'

export default function PaymentCard({ logo }) {
	return (
		<div className='relative aspect-video'>
			<Image
				src={`/payments/${logo}.svg`}
				alt={logo}
				fill
			/>
		</div>
	)
}
