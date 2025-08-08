import ContactForm from '@/components/sections/contact-form'
import Download from '@/components/sections/download'
import Info from '@/components/sections/info'
import Intro from '@/components/sections/intro'
import Plans from '@/components/sections/plans'
import Prices from '@/components/sections/prices'
import Questions from '@/components/sections/questions'

export default function Home() {
	return (
		<>
			<Intro />
			<Prices />
			<Plans />
			<Info />
			<ContactForm />
			<Questions />
			<Download />
		</>
	)
}
