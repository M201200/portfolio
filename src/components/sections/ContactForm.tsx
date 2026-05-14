import type { AnyFieldApi } from '@tanstack/react-form'
import { useForm } from '@tanstack/react-form'
import { Mail, SendHorizontal } from 'lucide-react'
import { useRef } from 'react'
import { toast, Toaster } from 'sonner'

import { sendContactMessage } from '#/api/contact'
import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { Spinner } from '#/components/ui/spinner'
import { Textarea } from '#/components/ui/textarea'
import { CONTACT_SCHEMA, TOPICS } from '#/lib/contact-schema'
import { useThemeStore } from '#/stores/theme'

const EMAIL = 'm201200dev@gmail.com'

export function ContactForm() {
  const honeypotRef = useRef<HTMLInputElement>(null)

  const theme = useThemeStore((s) => s.theme)
  const form = useForm({
    defaultValues: {
      topic: '' as (typeof TOPICS)[number]['value'] | '',
      email: '',
      message: '',
    },
    validators: {
      onSubmit: CONTACT_SCHEMA,
    },
    onSubmit: async ({ value, formApi }) => {
      if (honeypotRef.current?.value) return
      const result = await sendContactMessage({ data: value })
      if (result.ok) {
        formApi.reset()
        toast.success("Message sent — I'll be in touch.")
      } else {
        toast.error('Could not send. Try again or email me directly.')
      }
    },
  })

  return (
    <section
      id="contact"
      className="col-start-2 col-end-3 flex flex-col gap-10 py-12"
    >
      <header className="flex flex-col gap-4 max-w-[70ch]">
        <h2 className="text-headline">Get in touch</h2>
        <p className="text-lede text-secondary-foreground/70">
          Drop a message — I'll get back to you.
        </p>
      </header>

      <form
        className="flex flex-col max-w-xl"
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <div aria-hidden="true" className="sr-only">
          <input
            ref={honeypotRef}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            name="website"
            defaultValue=""
          />
        </div>

        <form.Field name="topic">
          {(field) => {
            const selected = TOPICS.find((t) => t.value === field.state.value)
            const hasError =
              field.state.meta.errors.length > 0 && field.state.meta.isTouched
            return (
              <div className="grid gap-2 relative pb-6">
                <Label htmlFor={field.name}>Topic</Label>
                <Select
                  value={field.state.value === '' ? null : field.state.value}
                  onValueChange={(v) => field.handleChange(v ?? '')}
                >
                  <SelectTrigger
                    id={field.name}
                    className={`w-full ${hasError ? 'border-destructive' : ''}`}
                  >
                    <SelectValue placeholder="What's this about?">
                      {selected ? selected.label : "What's this about?"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent
                    alignItemWithTrigger={false}
                    side="bottom"
                    sideOffset={4}
                  >
                    {TOPICS.map((t) => (
                      <SelectItem key={t.value} value={t.value}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError field={field} />
              </div>
            )
          }}
        </form.Field>

        <form.Field name="email">
          {(field) => {
            const hasError =
              field.state.meta.errors.length > 0 && field.state.meta.isTouched
            return (
              <div className="grid gap-2 relative pb-6">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="your@company.com"
                  autoComplete="email"
                  className={hasError ? 'border-destructive' : ''}
                />
                <FieldError field={field} />
              </div>
            )
          }}
        </form.Field>

        <form.Field name="message">
          {(field) => {
            const hasError =
              field.state.meta.errors.length > 0 && field.state.meta.isTouched
            return (
              <div className="grid gap-2 relative pb-6">
                <Label htmlFor={field.name}>Message</Label>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Type your message here"
                  rows={8}
                  className={`resize-none h-30 ${hasError ? 'border-destructive' : ''}`}
                />
                <FieldError field={field} />
              </div>
            )
          }}
        </form.Field>

        <div className="flex items-center gap-4 flex-wrap">
          <form.Subscribe
            selector={(s) => [s.canSubmit, s.isSubmitting] as const}
          >
            {([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                disabled={!canSubmit}
                className="w-fit min-w-24"
              >
                {isSubmitting ? 'Sending…' : 'Send'}{' '}
                {isSubmitting ? (
                  <Spinner className="size-4" />
                ) : (
                  <SendHorizontal className="size-4" />
                )}
              </Button>
            )}
          </form.Subscribe>

          <span className="text-caption text-muted-foreground">or</span>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 text-caption text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="size-4" />
            Email me directly
          </a>
        </div>
      </form>
      <Toaster position="top-center" richColors theme={theme} />
    </section>
  )
}

function FieldError({ field }: { field: AnyFieldApi }) {
  const errors = field.state.meta.errors
  if (!errors?.length) return null
  const msg = typeof errors[0] === 'string' ? errors[0] : errors[0]?.message
  if (!msg) return null
  return (
    <p className="text-xs text-destructive-foreground absolute bottom-2 left-0">
      {msg}
    </p>
  )
}
