export default function Form() {
	return (
		<form className='gap-6 grid shadow-xl p-8 border border-[#F3F4F6] rounded-2xl w-full max-w-[535px]'>
			<input
				type='text'
				inputMode='text'
				placeholder='Ваше имя'
				className='px-4 py-3.5 border border-[#D1D5DB] rounded-xl placeholder:text-[#757575]'
			/>
			<input
				type='tel'
				inputMode='tel'
				placeholder='Номер телефона'
				className='px-4 py-3.5 border border-[#D1D5DB] rounded-xl placeholder:text-[#757575]'
			/>
			<input
				type='email'
				inputMode='email'
				placeholder='Email адрес'
				className='px-4 py-3.5 border border-[#D1D5DB] rounded-xl placeholder:text-[#757575]'
			/>
			<textarea
				placeholder='Опишите ваш груз и требования'
				className='px-4 py-3.5 border border-[#D1D5DB] rounded-xl min-h-28 placeholder:text-[#757575] resize-none'
			></textarea>
			<button className='bg-[#1D5BD6] py-6 rounded-xl font-semibold text-white cursor-pointer'>
				Получить расчет стоимости
			</button>
		</form>
	)
}
