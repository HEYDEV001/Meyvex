"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="w-full space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <Label>Name</Label>
        <Input name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Email</Label>
        <Input
          name="email"
          type="email"
          placeholder="Your work email"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Phone</Label>
        <Input name="phone" type="tel" placeholder="Your phone number" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Message</Label>
        <Textarea
          name="message"
          placeholder="Tell us a little about your brand and what you're looking to build."
          required
        />
      </div>
      <Button className="w-full" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Let's Talk →"}
      </Button>
      {status === "sent" && (
        <p className="text-sm text-green-600">
          Thanks — we&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
