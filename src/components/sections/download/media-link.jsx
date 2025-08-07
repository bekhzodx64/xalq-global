import Image from 'next/image'
import Link from 'next/link'

export default function MediaLink({ link, logo }) {
	return (
		<Link
			href={link}
			className='relative w-5 md:w-10 h-5 md:h-10 aspect-square hover:scale-110 transition-transform duration-200'
		>
			<Image
				src={`/social-icons/${logo}.svg`}
				alt={logo}
				fill
				className='object-contain'
			/>
		</Link>
	)
}
