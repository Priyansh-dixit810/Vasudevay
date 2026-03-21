import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  email: z.email({ error: "Enter a valid email address" }),
  subject: z.string().min(1, { error: "Subject is required" }),
  message: z.string().min(1, { error: "Message is required" }),
});
export type ContactRequest = z.infer<typeof contactSchema>;

export interface ContactResponse {
    message: string;
}
