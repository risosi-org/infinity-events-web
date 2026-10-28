import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  phone: z.string().trim().min(7, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address"),
  type: z.string().default("Corporate Event"),
  date: z.string().optional(),
  message: z.string().trim().min(5, "Please tell us about your event"),
  website: z.string().optional(), // Honeypot field - must be empty
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const eventPlannerStep1Schema = z.object({
  type: z.string().min(1, "Please select an event type"),
});

export const eventPlannerStep3Schema = z.object({
  name: z.string().trim().min(2, "Please add your name"),
  phone: z.string().trim().min(7, "Please add your phone number"),
  date: z.string().optional(),
  venue: z.string().optional(),
});
