"use client";
import { ContactRequest, contactSchema } from "@/types/contact";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import z from "zod";
import { submitContactForm } from "@/api/contact";
import { Check, Loader2 } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type Error = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export function GetInTouchDialog({ open, onOpenChange }: Props) {
  const [formData, setFormData] = useState<ContactRequest>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading,setloading]=useState<boolean>(false);
  const [error, setError] = useState<Error>({});
  const [submitResponse, setSubmitResponse] = useState<string | null>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({});
    try {
      setloading(true)
      const result = contactSchema.safeParse(formData);
      if (!result.success) {
        const flattened = z.flattenError(result.error);
        setError({
          name: flattened.fieldErrors.name?.[0],
          email: flattened.fieldErrors.email?.[0],
          subject: flattened.fieldErrors.subject?.[0],
          message: flattened.fieldErrors.message?.[0],
        });
        return;
      }
      const res = await submitContactForm(result.data);
      if (res?.statusText == "OK") {
        setSubmitResponse(res.data.message);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setloading(false)
    }
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {submitResponse ? (
        <DialogContent>
          <div className="flex flex-col items-center justify-center pt-5 text-center">
            <div className="flex mb-4 items-center h-16 w-16 justify-center bg-green-400 rounded-full">
              <Check className="text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold">
              Message Sent!
            </DialogTitle>
            <DialogDescription className="mt-2 text-xs"> Thank you for reaching out, <span className="font-semibold text-primary">{formData.name}</span>. We&apos;ve received your message regarding {formData.subject} and will get back to you. </DialogDescription>
          </div>
          <Button variant="outline" onClick={() => onOpenChange(false)} className="mt-6 w-full sm:w-auto">
              Close Window
            </Button>
        </DialogContent>
      ) : (
        <DialogContent>
          <DialogTitle>Get In Touch</DialogTitle>
          <DialogDescription>
            Tell us a bit about your space and we’ll get back to you.
          </DialogDescription>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-2 flex-col">
              <Label htmlFor="name" className="flex gap-0.5">
                Name<span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={error.name ? "ring ring-red-500" : ""}
              />
              {error.name && (
                <p className="text-sm px-1 font-xs text-red-500">
                  {error.name}
                </p>
              )}
            </div>
            <div className="flex gap-2 flex-col">
              <Label className="flex gap-0.5" htmlFor="email">
                Email<span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your@email.com"
                className={error.email ? "ring ring-red-500" : ""}
              />
              {error.email && (
                <p className="text-sm px-1 font-xs text-red-500">
                  {error.email}
                </p>
              )}
            </div>
            <div className="flex gap-2 flex-col">
              <Label className="flex gap-0.5" htmlFor="subject">
                Subject<span className="text-red-500">*</span>
              </Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                className={error.subject ? "ring ring-red-500" : ""}
              />
              {error.subject && (
                <p className="text-sm px-1 font-xs text-red-500">
                  {error.subject}
                </p>
              )}
            </div>
            <div className="flex gap-2 flex-col">
              <Label className="flex gap-0.5" htmlFor="message">
                Message<span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enetr your Meesgae"
                className={error.message ? "ring ring-red-500" : ""}
              />
              {error.message && (
                <p className="text-sm px-1 font-xs text-red-500">
                  {error.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /></>) : ("Submit")}
            </Button>
          </form>
        </DialogContent>
      )}
    </Dialog>
  );
}
