import Image from 'next/image'
import Link from 'next/link'

export default function MediaLink({ link, logo }) {
	return (
		<Link
			href={link}
			className='relative aspect-square'
		>
			<Image
				src={`/social-icons/${logo}.svg`}
				alt={logo}
				fill
			/>
		</Link>
	)
}
