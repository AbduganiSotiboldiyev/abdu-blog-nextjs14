"use client"

import { contactSchema } from '@/lib/validation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import { toast } from 'sonner'

function ContactForm() {
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      message: "",
      name: "",
      email : ""
    },
  })
   function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsLoading(true)
    const  telegramBotApi = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API!
    const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!
    const promise = fetch(`https:/api.telegram.org/bot${telegramBotApi}/sendMessage`,{
        method: "POST",
        headers : {
            'Content-type' : "application/json",
            'cache-control' : 'no-cache'
        },
        body : JSON.stringify({
            chat_id : telegramChatId ,
            text : `Name : ${values.name}: Email : ${values.email}: Message : ${values.message}`
        })
    }).then(()=> form.reset())
    .finally(() => setIsLoading(false))
    
    toast.promise(promise, {
        loading : "Loading ...",
        success : "Message sent successfully",
        error : "Error sending message"
    })
   }
  return (<>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
            disabled={isLoading}
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                   
                    <Textarea 
                        {...field}
                        className='resize-none h-32'
                        placeholder='Ask question or just say Hi'
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            disabled={isLoading}
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input placeholder="Email adress" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            disabled={isLoading}
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Textarea 
                        {...field}
                        className='resize-none h-32'
                        placeholder='Your name here'
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button className='w-fit' size={'lg'} type='submit'>
                <span>Send</span>
                <Send className='w-4 h-4 ml-2' />
            </Button>
        </form>
        </Form>
  </>
  )
}

export default ContactForm


