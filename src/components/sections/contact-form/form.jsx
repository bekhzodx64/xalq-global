export default function Form() {
	return (
		<form className='gap-4 md:gap-6 grid sm:shadow-xl sm:p-6 md:p-8 border border-[#F3F4F6] rounded-xl md:rounded-2xl w-full max-w-full lg:max-w-[535px]'>
			<input
				type='text'
				inputMode='text'
				placeholder='Ваше имя'
				className='px-4 py-3 md:py-3.5 border border-[#D1D5DB] focus:border-transparent rounded-lg md:rounded-xl focus:outline-none focus:ring-[#1D5BD6] focus:ring-2 placeholder:text-[#757575] transition-all duration-200'
			/>
			<input
				type='tel'
				inputMode='tel'
				placeholder='Номер телефона'
				className='px-4 py-3 md:py-3.5 border border-[#D1D5DB] focus:border-transparent rounded-lg md:rounded-xl focus:outline-none focus:ring-[#1D5BD6] focus:ring-2 placeholder:text-[#757575] transition-all duration-200'
			/>
			<input
				type='email'
				inputMode='email'
				placeholder='Email адрес'
				className='px-4 py-3 md:py-3.5 border border-[#D1D5DB] focus:border-transparent rounded-lg md:rounded-xl focus:outline-none focus:ring-[#1D5BD6] focus:ring-2 placeholder:text-[#757575] transition-all duration-200'
			/>
			<textarea
				placeholder='Опишите ваш груз и требования'
				className='px-4 py-3 md:py-3.5 border border-[#D1D5DB] focus:border-transparent rounded-lg md:rounded-xl focus:outline-none focus:ring-[#1D5BD6] focus:ring-2 min-h-24 md:min-h-28 placeholder:text-[#757575] transition-all duration-200 resize-none'
			></textarea>
			<button className='bg-[#1D5BD6] hover:bg-[#1a4fc7] shadow-lg hover:shadow-xl py-4 md:py-6 rounded-lg md:rounded-xl font-semibold text-white transition-colors duration-200 cursor-pointer'>
				Получить расчет стоимости
			</button>
		</form>
	)
}
