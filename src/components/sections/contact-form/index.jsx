import Form from './form'
import FormInfo from './form-info'

export default function ContactForm() {
	return (
		<section
			className='mx-auto px-4 pt-6 md:pt-8 pb-12 md:pb-16 scroll-mt-[140px] container'
			id='contact-form'
		>
			<div className='flex lg:flex-row flex-col justify-between gap-8 lg:gap-12 bg-white sm:drop-shadow-2xl -mx-5 sm:mx-0 p-6 md:p-8 lg:p-12 sm:rounded-2xl md:rounded-3xl'>
				<FormInfo />
				<Form />
			</div>
		</section>
	)
}
