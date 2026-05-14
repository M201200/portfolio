import { createServerFn } from '@tanstack/react-start'

import { CONTACT_SCHEMA, TOPIC_LABELS } from '#/lib/contact-schema'

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export const sendContactMessage = createServerFn({ method: 'POST' })
  .inputValidator((raw: unknown) => CONTACT_SCHEMA.parse(raw))
  .handler(async ({ data }) => {
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      console.error('Telegram env vars not set')
      return { ok: false as const, error: 'Server not configured' }
    }

    const text = [
      `<b>📬 ${escapeHtml(TOPIC_LABELS[data.topic])}</b>`,
      ``,
      `<b>Email:</b> ${escapeHtml(data.email)}`,
      ``,
      escapeHtml(data.message),
    ].join('\n')

    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    })

    if (!tg.ok) {
      const errBody = await tg.text().catch(() => '')
      console.error('Telegram error:', tg.status, errBody)
      return { ok: false as const, error: 'Failed to send' }
    }

    return { ok: true as const }
  })
