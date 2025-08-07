import Form from './form'
import FormInfo from './form-info'

export default function ContactForm() {
	return (
		<section
			className='mx-auto pt-8 pb-16 scroll-mt-[140px] container'
			id='contact-form'
		>
			<div className='flex justify-between bg-white drop-shadow-2xl p-12 rounded-3xl'>
				<FormInfo />
				<Form />
			</div>
		</section>
	)
}
