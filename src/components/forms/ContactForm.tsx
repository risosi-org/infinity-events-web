"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      type: "Corporate Event",
      date: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Honeypot spam check
    if (data.website) return;

    setIsSubmitting(true);
    setStatusMessage("Sending…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSuccess(true);
        setStatusMessage("Thank you! Our team will contact you within 24 hours.");
        reset();
      } else if (resData.fallbackMailto) {
        // Fallback to mailto if external endpoint is not yet configured
        const body =
          `Name: ${data.name}\n` +
          `Phone: ${data.phone}\n` +
          `Email: ${data.email}\n` +
          `Event type: ${data.type}\n` +
          `Date: ${data.date || "Flexible"}\n\n` +
          data.message;

        window.location.href = siteConfig.links.mailto(
          `Event enquiry — ${data.type} — ${data.name}`,
          body
        );
        setStatusMessage(
          "Opening your email app… You can also WhatsApp us on " +
            siteConfig.phoneDisplay +
            " for a faster reply."
        );
      } else {
        throw new Error(resData.message || "Failed to submit");
      }
    } catch {
      // Fallback behavior identical to original main.js
      const body =
        `Name: ${data.name}\n` +
        `Phone: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `Event type: ${data.type}\n` +
        `Date: ${data.date || "Flexible"}\n\n` +
        data.message;

      window.location.href = siteConfig.links.mailto(
        `Event enquiry — ${data.type} — ${data.name}`,
        body
      );
      setStatusMessage(
        "Opening your email app… You can also WhatsApp us on " +
          siteConfig.phoneDisplay +
          " for a faster reply."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="contact__card border border-[rgba(212,175,92,0.18)] rounded-3xl p-[clamp(22px,4vw,44px)] bg-[#0e0c12] reveal"
      data-delay="1"
      noValidate
    >
      <h3 className="h-display text-[32px] m-0 mb-[22px]">Send an enquiry</h3>

      {/* Row 1: Name & Phone */}
      <div className="grid gap-3.5 sm:grid-cols-2 mb-3.5">
        <div className="field flex flex-col gap-1.5">
          <label
            htmlFor="c-name"
            className="text-[11px] uppercase tracking-[0.18em] text-[#a59f94] font-bold"
          >
            Full name *
          </label>
          <input
            id="c-name"
            autoComplete="name"
            {...register("name")}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#f4efe6] text-[15px] focus:outline-none focus:border-[#d4af5c] focus:bg-[rgba(212,175,92,0.05)] transition-colors"
          />
          {errors.name && (
            <span className="text-[12px] text-red-400 mt-0.5">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="field flex flex-col gap-1.5">
          <label
            htmlFor="c-phone"
            className="text-[11px] uppercase tracking-[0.18em] text-[#a59f94] font-bold"
          >
            Phone *
          </label>
          <input
            id="c-phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#f4efe6] text-[15px] focus:outline-none focus:border-[#d4af5c] focus:bg-[rgba(212,175,92,0.05)] transition-colors"
          />
          {errors.phone && (
            <span className="text-[12px] text-red-400 mt-0.5">
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="field flex flex-col gap-1.5 mb-3.5">
        <label
          htmlFor="c-email"
          className="text-[11px] uppercase tracking-[0.18em] text-[#a59f94] font-bold"
        >
          Email *
        </label>
        <input
          id="c-email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#f4efe6] text-[15px] focus:outline-none focus:border-[#d4af5c] focus:bg-[rgba(212,175,92,0.05)] transition-colors"
        />
        {errors.email && (
          <span className="text-[12px] text-red-400 mt-0.5">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Row 2: Event Type & Date */}
      <div className="grid gap-3.5 sm:grid-cols-2 mb-3.5">
        <div className="field flex flex-col gap-1.5">
          <label
            htmlFor="c-type"
            className="text-[11px] uppercase tracking-[0.18em] text-[#a59f94] font-bold"
          >
            Event type
          </label>
          <select
            id="c-type"
            {...register("type")}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#f4efe6] text-[15px] focus:outline-none focus:border-[#d4af5c] focus:bg-[rgba(212,175,92,0.05)] transition-colors appearance-none pr-11 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23d4af5c%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:18px] bg-no-repeat bg-[right_14px_center]"
          >
            <option className="bg-[#0e0c12]">Corporate Event</option>
            <option className="bg-[#0e0c12]">Awards / Gala Night</option>
            <option className="bg-[#0e0c12]">Wedding</option>
            <option className="bg-[#0e0c12]">Brand Launch</option>
            <option className="bg-[#0e0c12]">Concert / VIP</option>
            <option className="bg-[#0e0c12]">Summit / Expo / Roadshow</option>
            <option className="bg-[#0e0c12]">NextGen Summit Partnership</option>
            <option className="bg-[#0e0c12]">Other</option>
          </select>
        </div>

        <div className="field flex flex-col gap-1.5">
          <label
            htmlFor="c-date"
            className="text-[11px] uppercase tracking-[0.18em] text-[#a59f94] font-bold"
          >
            Event date
          </label>
          <input
            id="c-date"
            type="date"
            {...register("date")}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#f4efe6] text-[15px] focus:outline-none focus:border-[#d4af5c] focus:bg-[rgba(212,175,92,0.05)] transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div className="field flex flex-col gap-1.5 mb-3.5">
        <label
          htmlFor="c-msg"
          className="text-[11px] uppercase tracking-[0.18em] text-[#a59f94] font-bold"
        >
          Tell us about your event *
        </label>
        <textarea
          id="c-msg"
          rows={4}
          placeholder="Guests, venue ideas, budget range, the vibe you want…"
          {...register("message")}
          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#f4efe6] text-[15px] min-h-[120px] resize-y focus:outline-none focus:border-[#d4af5c] focus:bg-[rgba(212,175,92,0.05)] transition-colors"
        />
        {errors.message && (
          <span className="text-[12px] text-red-400 mt-0.5">
            {errors.message.message}
          </span>
        )}
      </div>

      {/* Honeypot anti-spam input */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register("website")}
        className="absolute -left-[9999px]"
        aria-hidden="true"
      />

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn--gold btn--block mt-2"
      >
        {isSubmitting ? "Sending…" : "Send Enquiry"}
      </button>

      {/* Feedback status */}
      {statusMessage && (
        <p
          className={`form-status mt-3.5 text-[14px] min-h-[20px] ${
            isSuccess ? "text-[#f5d27a]" : "text-[#d4af5c]"
          }`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      )}

      <p className="form-note text-[12px] text-[#76716a] mt-2.5 mb-0">
        By submitting you agree to be contacted about your enquiry. We never share
        your details.
      </p>
    </form>
  );
}
