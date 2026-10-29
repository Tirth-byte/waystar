"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { PROPERTIES } from "@/data/properties";
import { useEnquiries } from "@/hooks/useEnquiries";
import { CheckCircle2, AlertCircle, ArrowUpRight, Shield } from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  propertySlug: string;
  preferredDate: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  propertySlug?: string;
  preferredDate?: string;
  message?: string;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialProperty = searchParams.get("property") || "";
  const { saveEnquiry } = useEnquiries();

  const [form, setForm] = useState<FormState>(() => ({
    fullName: "",
    email: "",
    phone: "",
    propertySlug: initialProperty,
    preferredDate: "",
    message: "",
  }));

  const [prevInitial, setPrevInitial] = useState(initialProperty);
  if (initialProperty !== prevInitial) {
    setPrevInitial(initialProperty);
    setForm((prev) => ({ ...prev, propertySlug: initialProperty }));
  }

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmissionId, setLastSubmissionId] = useState<string>("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      newErrors.fullName = "Please provide your full legal name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      newErrors.email = "Please provide a valid private email address.";
    }

    const phoneRegex = /^[\d\s+\-().]{7,}$/;
    if (!form.phone.trim() || !phoneRegex.test(form.phone.trim())) {
      newErrors.phone = "Please provide a valid contact telephone number.";
    }

    if (!form.preferredDate) {
      newErrors.preferredDate = "Please select your preferred private viewing date.";
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = "Please include any specific scheduling requirements (minimum 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const selectedProp = PROPERTIES.find((p) => p.slug === form.propertySlug);
    const propName = selectedProp ? selectedProp.name : "General Portfolio Advisory";

    const record = saveEnquiry({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      propertySlug: form.propertySlug || "general",
      propertyName: propName,
      preferredDate: form.preferredDate,
      message: form.message.trim(),
    });

    setLastSubmissionId(record.id);
    setSubmitted(true);
  };

  if (submitted) {
    const selectedProp = PROPERTIES.find((p) => p.slug === form.propertySlug);

    return (
      <div className="bg-[#20211F] text-[#F7F6F2] p-8 sm:p-14 border border-white/15 space-y-8 animate-in fade-in duration-500 max-w-2xl mx-auto shadow-2xl">
        <div className="flex items-center space-x-3 text-[#B9A994]">
          <CheckCircle2 className="w-8 h-8" />
          <span className="text-xs uppercase tracking-[0.3em]">
            Demonstration Enquiry Registered
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-3xl sm:text-4xl font-light">
            Private Viewing Logged
          </h3>
          <p className="text-xs sm:text-sm text-[#E6DED0]/80 leading-relaxed font-light">
            Thank you, <strong className="text-white font-medium">{form.fullName}</strong>. Your demonstration request for{" "}
            <strong className="text-[#B9A994] font-medium">
              {selectedProp ? selectedProp.name : "General Portfolio Advisory"}
            </strong>{" "}
            on <strong className="text-white font-medium">{form.preferredDate}</strong> has been saved locally to your browser&apos;s storage cache.
          </p>
        </div>

        {/* Academic Prototype Notice */}
        <div className="p-4 bg-white/5 border border-white/10 space-y-2 text-xs text-[#55544F]">
          <div className="flex items-center space-x-2 text-[#B9A994]">
            <Shield className="w-4 h-4" />
            <span className="uppercase tracking-wider font-semibold text-[10px]">
              Privacy & Examination Notice
            </span>
          </div>
          <p className="leading-relaxed">
            Record ID: <code className="text-[#E6DED0]">{lastSubmissionId}</code>. In accordance with examination guidelines, this is a simulated interface. No external network requests were made, and no real real estate broker has received your credentials.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({
                fullName: "",
                email: "",
                phone: "",
                propertySlug: "",
                preferredDate: "",
                message: "",
              });
            }}
            className="w-full sm:w-auto bg-[#B9A994] hover:bg-white text-[#20211F] text-xs uppercase tracking-[0.2em] px-6 py-3.5 font-medium transition-colors"
          >
            Submit Another Demo Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#20211F] text-[#F7F6F2] p-8 sm:p-12 border border-white/15 space-y-6 shadow-2xl"
    >
      <div className="border-b border-white/10 pb-6 space-y-1">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9A994]">
          Confidential Registration
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F7F6F2]">
          Schedule a Private Consultation
        </h3>
        <p className="text-xs text-[#E6DED0]/70 font-light">
          Fields marked below are verified locally for demonstration purposes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2 sm:col-span-2">
          <label
            htmlFor="fullName"
            className="text-[10px] uppercase tracking-[0.25em] text-[#B9A994] block font-medium"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            placeholder="e.g. Lord Alexander Sinclair"
            className={`w-full bg-[#171816] text-[#F7F6F2] placeholder-[#55544F] text-xs sm:text-sm px-4 py-3.5 border focus:outline-none transition-colors ${
              errors.fullName
                ? "border-red-400 focus:border-red-500"
                : "border-white/15 focus:border-[#B9A994]"
            }`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-400 flex items-center space-x-1 mt-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-[10px] uppercase tracking-[0.25em] text-[#B9A994] block font-medium"
          >
            Private Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="client@sanctuary.com"
            className={`w-full bg-[#171816] text-[#F7F6F2] placeholder-[#55544F] text-xs sm:text-sm px-4 py-3.5 border focus:outline-none transition-colors ${
              errors.email
                ? "border-red-400 focus:border-red-500"
                : "border-white/15 focus:border-[#B9A994]"
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-400 flex items-center space-x-1 mt-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-[10px] uppercase tracking-[0.25em] text-[#B9A994] block font-medium"
          >
            Telephone / Mobile *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+44 20 7946 0912"
            className={`w-full bg-[#171816] text-[#F7F6F2] placeholder-[#55544F] text-xs sm:text-sm px-4 py-3.5 border focus:outline-none transition-colors ${
              errors.phone
                ? "border-red-400 focus:border-red-500"
                : "border-white/15 focus:border-[#B9A994]"
            }`}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-400 flex items-center space-x-1 mt-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Development Selection */}
        <div className="space-y-2">
          <label
            htmlFor="propertySlug"
            className="text-[10px] uppercase tracking-[0.25em] text-[#B9A994] block font-medium"
          >
            Residence of Interest
          </label>
          <select
            id="propertySlug"
            value={form.propertySlug}
            onChange={(e) => setForm({ ...form, propertySlug: e.target.value })}
            className="w-full bg-[#171816] text-[#F7F6F2] text-xs sm:text-sm px-4 py-3.5 border border-white/15 focus:outline-none focus:border-[#B9A994] transition-colors cursor-pointer"
          >
            <option value="" className="bg-[#20211F]">
              General Portfolio Advisory (All Estates)
            </option>
            {PROPERTIES.map((prop) => (
              <option key={prop.slug} value={prop.slug} className="bg-[#20211F]">
                {prop.name} — {prop.city} ({prop.formattedPrice})
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Date */}
        <div className="space-y-2">
          <label
            htmlFor="preferredDate"
            className="text-[10px] uppercase tracking-[0.25em] text-[#B9A994] block font-medium"
          >
            Preferred Viewing Date *
          </label>
          <input
            id="preferredDate"
            type="date"
            required
            value={form.preferredDate}
            onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
            className={`w-full bg-[#171816] text-[#F7F6F2] text-xs sm:text-sm px-4 py-3.5 border focus:outline-none transition-colors ${
              errors.preferredDate
                ? "border-red-400 focus:border-red-500"
                : "border-white/15 focus:border-[#B9A994]"
            }`}
          />
          {errors.preferredDate && (
            <p className="text-[11px] text-red-400 flex items-center space-x-1 mt-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.preferredDate}</span>
            </p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2 sm:col-span-2">
          <label
            htmlFor="message"
            className="text-[10px] uppercase tracking-[0.25em] text-[#B9A994] block font-medium"
          >
            Scheduling Details & Inquiries *
          </label>
          <textarea
            id="message"
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Please detail any architectural queries, yacht slip needs, or specific dates for private viewing..."
            className={`w-full bg-[#171816] text-[#F7F6F2] placeholder-[#55544F] text-xs sm:text-sm px-4 py-3.5 border focus:outline-none transition-colors ${
              errors.message
                ? "border-red-400 focus:border-red-500"
                : "border-white/15 focus:border-[#B9A994]"
            }`}
          />
          {errors.message && (
            <p className="text-[11px] text-red-400 flex items-center space-x-1 mt-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-[#55544F] leading-relaxed max-w-sm">
          Demonstration notice: Form submissions persist locally on this device. No external transmission occurs.
        </p>

        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#F7F6F2] hover:bg-[#B9A994] text-[#20211F] text-xs uppercase tracking-[0.25em] px-8 py-4 font-semibold transition-all group"
        >
          <span>Transmit Demonstration Enquiry</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </form>
  );
}
