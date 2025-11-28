'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      form.reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-text-primary">Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Your name"
                  className="bg-bg-card border-border-subtle text-text-primary placeholder:text-text-muted focus:border-border-accent min-h-[44px]"
                  aria-required="true"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-text-primary">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-bg-card border-border-subtle text-text-primary placeholder:text-text-muted focus:border-border-accent min-h-[44px]"
                  aria-required="true"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-text-primary">Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Your message..."
                  rows={6}
                  className="bg-bg-card border-border-subtle text-text-primary placeholder:text-text-muted focus:border-border-accent resize-none"
                  aria-required="true"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <p className="text-sm text-text-muted mb-2">
          This form sends directly to my inbox at itsjakirhussain@gmail.com.
        </p>
        
        {submitStatus === 'success' && (
          <p className="text-green-400 text-sm" role="alert">
            Thanks! I'll get back to you soon.
          </p>
        )}
        
        {submitStatus === 'error' && (
          <p className="text-red-400 text-sm" role="alert">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="gradient-button-primary text-white hover:opacity-90 glow-effect-hover w-full min-h-[44px]"
          size="lg"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        
        <p className="text-xs text-text-muted text-center mt-4">
          For the fastest response, reach me via Email or WhatsApp using the quick actions.
        </p>
      </form>
    </Form>
  )
}


