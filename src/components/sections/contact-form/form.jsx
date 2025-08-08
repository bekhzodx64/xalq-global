'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Form() {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [isSending, setIsSending] = useState(false)
	const [success, setSuccess] = useState(false)
	const t = useTranslations('Form')

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSending(true)
		setSuccess(false)

		const res = fetch('/api/send-to-telegram', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, phone, email, message }),
		})

		if (res.ok) {
			setSuccess(true)
			setName('')
			setPhone('')
			setEmail('')
			setMessage('')
		}

		setIsSending(false)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='gap-4 md:gap-6 grid sm:shadow-xl sm:p-6 md:p-8 border border-[#F3F4F6] rounded-xl md:rounded-2xl w-full max-w-full lg:max-w-[535px]'
		>
			<input
				type='text'
				inputMode='text'
				placeholder={t('name')}
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
				className='px-4 py-3 md:py-3.5 border border-[#D1D5DB] focus:border-transparent rounded-lg md:rounded-xl focus:outline-none focus:ring-[#1D5BD6] focus:ring-2 placeholder:text-[#757575] transition-all duration-200'
			/>
			<input
				type='tel'
				inputMode='tel'
				placeholder={t('tel')}
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				required
				className='px-4 py-3 md:py-3.5 border border-[#D1D5DB] focus:border-transparent rounded-lg md:rounded-xl focus:outline-none focus:ring-[#1D5BD6] focus:ring-2 placeholder:text-[#757575] transition-all duration-200'
			/>
			<input
				type='email'
				inputMode='email'
				placeholder={t('email')}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
				className='px-4 py-3 md:py-3.5 border border-[#D1D5DB] focus:border-transparent rounded-lg md:rounded-xl focus:outline-none focus:ring-[#1D5BD6] focus:ring-2 placeholder:text-[#757575] transition-all duration-200'
			/>
			<textarea
				placeholder={t('area')}
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				required
				className='px-4 py-3 md:py-3.5 border border-[#D1D5DB] focus:border-transparent rounded-lg md:rounded-xl focus:outline-none focus:ring-[#1D5BD6] focus:ring-2 min-h-24 md:min-h-28 placeholder:text-[#757575] transition-all duration-200 resize-none'
			></textarea>
			<button
				type='submit'
				disabled={isSending}
				className='bg-[#1D5BD6] hover:bg-[#1a4fc7] shadow-lg hover:shadow-xl py-4 md:py-6 rounded-lg md:rounded-xl font-semibold text-white transition-colors duration-200 cursor-pointer'
			>
				{t('button')}
			</button>
		</form>
	)
}
