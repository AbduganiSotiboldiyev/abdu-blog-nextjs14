"use client"

import { z } from "zod"

export const contactSchema = z.object({
  message: z.string().min(2).max(50),
  email: z.string().email(),
  name : z.string().min(3,{message :"Your name should be at least 3 characters"})
})
