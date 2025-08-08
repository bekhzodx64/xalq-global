export async function POST(req) {
	try {
		const body = await req.json()
		const { name, phone, email, message } = body

		const text = `
📦 <b>Новая заявка</b>\n
👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
📧 <b>Email:</b> ${email}
📝 <b>Сообщение:</b> ${message}
		`

		const TELEGRAM_TOKEN = '6333113914:AAF08PYCUya6b2AM_sEFwiAoLWh1k1dJFQk'
		const CHAT_ID = '-4978468315'
		const TELEGRAM_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`

		const response = await fetch(TELEGRAM_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chat_id: CHAT_ID,
				text,
				parse_mode: 'HTML',
			}),
		})

		if (!response.ok) {
			throw new Error('Telegram API error')
		}

		return Response.json({ success: true })
	} catch (error) {
		console.error(error)
		return Response.json(
			{ success: false, error: error.message },
			{ status: 500 }
		)
	}
}
