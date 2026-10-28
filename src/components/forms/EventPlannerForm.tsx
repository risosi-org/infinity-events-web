"use client";

import React, { useState } from "react";
import { generatePlannerWhatsAppUrl } from "@/lib/utils";
import type { EventPlannerState } from "@/types";

const EVENT_TYPES = [
  { value: "Corporate Event", label: "Corporate Event", icon: "🏢" },
  { value: "Awards / Gala Night", label: "Awards / Gala", icon: "🏆" },
  { value: "Wedding", label: "Wedding", icon: "💍" },
  { value: "Brand Launch", label: "Brand Launch", icon: "🚀" },
  { value: "Concert / VIP Party", label: "Concert / VIP", icon: "🎤" },
  { value: "Summit / Expo / Roadshow", label: "Summit / Roadshow", icon: "🌍" },
];

const SERVICES_OPTIONS = [
  { value: "Venue", label: "Venue Sourcing" },
  { value: "Stage, Light & AV", label: "Stage, Light & AV" },
  { value: "Décor & Florals", label: "Décor & Florals" },
  { value: "Catering", label: "Catering" },
  { value: "Entertainment & Hosts", label: "Entertainment" },
  { value: "Photo & Video", label: "Photo & Video" },
];

export function EventPlannerForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<EventPlannerState>({
    type: "",
    guests: 150,
    services: [],
    date: "",
    venue: "",
    name: "",
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = <K extends keyof EventPlannerState>(
    field: K,
    value: EventPlannerState[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMessage("");
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const nextServices = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: nextServices };
    });
  };

  const handleNext = () => {
    if (currentStep === 0 && !formData.type) {
      setErrorMessage("Please select an event type.");
      return;
    }
    setErrorMessage("");
    setCurrentStep((prev) => Math.min(prev + 1, 2));
  };

  const handlePrev = () => {
    setErrorMessage("");
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please add your name and phone number.");
      return;
    }
    const whatsappUrl = generatePlannerWhatsAppUrl(formData);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const guestPercentage = ((formData.guests - 20) / (2000 - 20)) * 100;
  const guestDisplay = formData.guests >= 2000 ? "2000+" : formData.guests.toString();

  return (
    <div className="planner grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] border border-[rgba(212,175,92,0.18)] rounded-[28px] bg-[linear-gradient(160deg,rgba(212,175,92,0.08),rgba(255,255,255,0.01)_40%)] bg-[#0e0c12] p-[clamp(22px,4vw,54px)] gap-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] reveal">
      {/* Form Wizard */}
      <form onSubmit={handleSubmit} noValidate className="min-w-0">
        {/* Step Indicator Bars */}
        <div className="flex gap-2 mb-[26px]" aria-hidden="true">
          {[0, 1, 2].map((step) => (
            <i
              key={step}
              className={`flex-1 h-[3px] rounded-[3px] transition-colors duration-400 ${
                step <= currentStep ? "bg-[#d4af5c]" : "bg-white/[0.08]"
              }`}
            />
          ))}
        </div>

        {/* Step 1: Event Type */}
        {currentStep === 0 && (
          <fieldset className="pstep border-0 p-0 m-0 animate-fade">
            <legend className="sr-only">Step 1: event type</legend>
            <h3 className="h-display text-[clamp(26px,3vw,34px)] mb-[18px]">
              1. What are we celebrating?
            </h3>
            <div className="choice-grid grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {EVENT_TYPES.map((t) => (
                <div key={t.value} className="choice relative">
                  <input
                    type="radio"
                    name="p-type"
                    id={`type-${t.value}`}
                    value={t.value}
                    checked={formData.type === t.value}
                    onChange={() => updateField("type", t.value)}
                    className="absolute opacity-0 pointer-events-none"
                  />
                  <label
                    htmlFor={`type-${t.value}`}
                    className={`flex flex-col gap-1.5 h-full p-4 border rounded-[14px] cursor-pointer transition-all duration-300 font-semibold text-[14px] ${
                      formData.type === t.value
                        ? "border-[#d4af5c] bg-[rgba(212,175,92,0.12)] shadow-[inset_0_0_0_1px_#d4af5c]"
                        : "border-white/[0.08] bg-white/[0.02] hover:border-[rgba(212,175,92,0.18)]"
                    }`}
                  >
                    <span className="text-[22px] leading-none">{t.icon}</span>
                    <span>{t.label}</span>
                  </label>
                </div>
              ))}
            </div>
            {errorMessage && (
              <p className="form-status mt-3.5 text-[14px] text-[#f5d27a]" role="status">
                {errorMessage}
              </p>
            )}
          </fieldset>
        )}

        {/* Step 2: Guest Count & Services */}
        {currentStep === 1 && (
          <fieldset className="pstep border-0 p-0 m-0 animate-fade">
            <legend className="sr-only">Step 2: size and services</legend>
            <h3 className="h-display text-[clamp(26px,3vw,34px)] mb-[18px]">
              2. How big & what do you need?
            </h3>
            <div className="range my-2">
              <label htmlFor="p-guests" className="sr-only">
                Number of guests
              </label>
              <output
                id="p-guests-out"
                htmlFor="p-guests"
                className="font-display text-[56px] leading-none text-[#f5d27a]"
              >
                {guestDisplay}
                <small className="font-sans text-[14px] text-[#a59f94] ml-1.5 font-normal">
                  guests
                </small>
              </output>
              <input
                type="range"
                id="p-guests"
                min="20"
                max="2000"
                step="10"
                value={formData.guests}
                onChange={(e) => updateField("guests", parseInt(e.target.value, 10))}
                style={{ "--p": `${guestPercentage}%` } as React.CSSProperties}
              />
            </div>
            <div className="choice-grid grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {SERVICES_OPTIONS.map((s) => {
                const isSelected = formData.services.includes(s.value);
                return (
                  <div key={s.value} className="choice relative">
                    <input
                      type="checkbox"
                      name="p-svc"
                      id={`svc-${s.value}`}
                      value={s.value}
                      checked={isSelected}
                      onChange={() => toggleService(s.value)}
                      className="absolute opacity-0 pointer-events-none"
                    />
                    <label
                      htmlFor={`svc-${s.value}`}
                      className={`flex flex-col gap-1.5 h-full p-4 border rounded-[14px] cursor-pointer transition-all duration-300 font-semibold text-[14px] ${
                        isSelected
                          ? "border-[#d4af5c] bg-[rgba(212,175,92,0.12)] shadow-[inset_0_0_0_1px_#d4af5c]"
                          : "border-white/[0.08] bg-white/[0.02] hover:border-[rgba(212,175,92,0.18)]"
                      }`}
                    >
                      {s.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </fieldset>
        )}

        {/* Step 3: Date, Venue, Contact */}
        {currentStep === 2 && (
          <fieldset className="pstep border-0 p-0 m-0 animate-fade">
            <legend className="sr-only">Step 3: details</legend>
            <h3 className="h-display text-[clamp(26px,3vw,34px)] mb-[18px]">
              3. When, where & who?
            </h3>
            <div className="grid gap-3.5 sm:grid-cols-2 mb-3.5">
              <div className="field flex flex-col gap-1.5">
                <label
                  htmlFor="p-date"
                  className="text-[11px] uppercase tracking-[0.18em] text-[#a59f94] font-bold"
                >
                  Preferred date
                </label>
                <input
                  type="date"
                  id="p-date"
                  value={formData.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#f4efe6] text-[15px] focus:outline-none focus:border-[#d4af5c] focus:bg-[rgba(212,175,92,0.05)] transition-colors"
                />
              </div>
              <div className="field flex flex-col gap-1.5">
                <label
                  htmlFor="p-venue"
                  className="text-[11px] uppercase tracking-[0.18em] text-[#a59f94] font-bold"
                >
                  City / Venue
                </label>
                <input
                  type="text"
                  id="p-venue"
                  placeholder="Dubai, Abu Dhabi, abroad…"
                  value={formData.venue}
                  onChange={(e) => updateField("venue", e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#f4efe6] text-[15px] focus:outline-none focus:border-[#d4af5c] focus:bg-[rgba(212,175,92,0.05)] transition-colors"
                />
              </div>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2">
              <div className="field flex flex-col gap-1.5">
                <label
                  htmlFor="p-name"
                  className="text-[11px] uppercase tracking-[0.18em] text-[#a59f94] font-bold"
                >
                  Your name *
                </label>
                <input
                  type="text"
                  id="p-name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#f4efe6] text-[15px] focus:outline-none focus:border-[#d4af5c] focus:bg-[rgba(212,175,92,0.05)] transition-colors"
                />
              </div>
              <div className="field flex flex-col gap-1.5">
                <label
                  htmlFor="p-phone"
                  className="text-[11px] uppercase tracking-[0.18em] text-[#a59f94] font-bold"
                >
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="p-phone"
                  autoComplete="tel"
                  placeholder="+971"
                  required
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#f4efe6] text-[15px] focus:outline-none focus:border-[#d4af5c] focus:bg-[rgba(212,175,92,0.05)] transition-colors"
                />
              </div>
            </div>
            {errorMessage && (
              <p className="form-status mt-3.5 text-[14px] text-[#f5d27a]" role="status">
                {errorMessage}
              </p>
            )}
          </fieldset>
        )}

        {/* Wizard Navigation */}
        <div className="planner__nav flex justify-between gap-3 mt-7">
          <button
            type="button"
            onClick={handlePrev}
            className={`btn btn--ghost btn--sm ${
              currentStep === 0 ? "invisible" : "visible"
            }`}
          >
            ← Back
          </button>
          {currentStep < 2 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn btn--gold btn--sm"
            >
              Continue →
            </button>
          ) : (
            <button type="submit" className="btn btn--gold btn--sm">
              Send on WhatsApp
            </button>
          )}
        </div>
      </form>

      {/* Sidebar Live Event Brief Summary */}
      <aside className="summary border border-dashed border-[rgba(212,175,92,0.18)] rounded-2xl p-[22px] bg-black/25 flex flex-col justify-between" aria-live="polite">
        <div>
          <h4 className="m-0 mb-3 text-[12px] uppercase tracking-[0.24em] text-[#d4af5c] font-bold">
            Your Event Brief
          </h4>
          <dl className="m-0 grid gap-2.5">
            <div className="flex justify-between gap-3 border-b border-white/[0.08] pb-2 text-[14px]">
              <dt className="text-[#a59f94]">Event</dt>
              <dd className="m-0 text-right font-semibold text-[#f4efe6]">
                {formData.type || "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-3 border-b border-white/[0.08] pb-2 text-[14px]">
              <dt className="text-[#a59f94]">Guests</dt>
              <dd className="m-0 text-right font-semibold text-[#f4efe6]">
                {guestDisplay}
              </dd>
            </div>
            <div className="flex justify-between gap-3 border-b border-white/[0.08] pb-2 text-[14px]">
              <dt className="text-[#a59f94]">Services</dt>
              <dd className="m-0 text-right font-semibold text-[#f4efe6]">
                {formData.services.length > 0 ? formData.services.join(", ") : "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-3 border-b border-white/[0.08] pb-2 text-[14px]">
              <dt className="text-[#a59f94]">Date</dt>
              <dd className="m-0 text-right font-semibold text-[#f4efe6]">
                {formData.date || "Flexible"}
              </dd>
            </div>
            <div className="flex justify-between gap-3 border-b border-white/[0.08] pb-2 text-[14px]">
              <dt className="text-[#a59f94]">City / Venue</dt>
              <dd className="m-0 text-right font-semibold text-[#f4efe6]">
                {formData.venue || "—"}
              </dd>
            </div>
          </dl>
        </div>
        <p className="text-[12px] text-[#76716a] mt-4 mb-0">
          Your brief opens in WhatsApp — nothing is stored on this website.
        </p>
      </aside>
    </div>
  );
}
