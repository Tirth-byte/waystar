"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Shield, ArrowUpRight } from "lucide-react";
import { validateViewingForm } from "@/lib/validation";

interface ViewingRequestFormProps {
  residenceId?: string;
  residenceName?: string;
  residenceCity?: "Dubai" | "New York";
  onSuccess?: () => void;
}

export default function ViewingRequestForm({
  residenceId,
  residenceName,
  residenceCity,
  onSuccess,
}: ViewingRequestFormProps) {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    preferredCity: residenceCity || "Dubai",
    advisoryType: "In-Person Private Viewing",
    preferredDate: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } = validateViewingForm(formData);
    setErrors(validationErrors);

    if (!isValid) return;

    setIsSubmitting(true);

    // Simulate advisory coordination dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      preferredCity: residenceCity || "Dubai",
      advisoryType: "In-Person Private Viewing",
      preferredDate: "",
      notes: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#111311] border border-[#C1AD91]/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-fade-in">
        <div className="w-14 h-14 mx-auto rounded-full bg-[#C1AD91]/15 border border-[#C1AD91] flex items-center justify-center text-[#C1AD91]">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C1AD91] block">
            Advisory Request Confirmed
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-white font-light">
            Consultation Transmitted
          </h3>
          <p className="text-xs sm:text-sm text-[#A6A39E] font-light max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{formData.clientName}</strong>. Your private enquiry for{" "}
            {residenceName ? <strong className="text-white">{residenceName}</strong> : "our curated portfolio"}{" "}
            has been received by the WAYSTAR Private Office.
          </p>
        </div>

        {/* Academic Simulation Notice */}
        <div className="p-4 bg-black/40 border border-white/10 text-left text-[11px] text-[#A6A39E] space-y-1">
          <p className="text-[#C1AD91] font-semibold uppercase tracking-wider text-[10px]">
            Academic Simulation Notice:
          </p>
          <p>
            This consultation request has been simulated locally for the AI-Assisted Web Application End Semester Examination. No live real estate appointments are scheduled.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#C1AD91] hover:text-white transition-colors"
        >
          <span>Submit Another Enquiry</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111311] border border-white/10 p-6 sm:p-10 space-y-6 text-[#F4F1EB] shadow-2xl"
    >
      {residenceId && <input type="hidden" name="residenceId" value={residenceId} />}
      <div className="space-y-1 border-b border-white/10 pb-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#C1AD91] font-medium block">
          Confidential Consultation
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
          {residenceName ? `Enquire About ${residenceName}` : "Request Private Viewing"}
        </h3>
      </div>

      <div className="space-y-4">
        {/* Client Name */}
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[#A6A39E] block">
            Full Name or Entity *
          </label>
          <input
            type="text"
            required
            value={formData.clientName}
            onChange={(e) => {
              setFormData({ ...formData, clientName: e.target.value });
              if (errors.clientName) setErrors({ ...errors, clientName: "" });
            }}
            placeholder="e.g. Lord Sterling Archer or Sterling Advisory LLC"
            className={`w-full bg-[#0B0D0C] border px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C1AD91] transition-colors ${
              errors.clientName ? "border-red-500/80" : "border-white/15"
            }`}
          />
          {errors.clientName && (
            <p className="text-[10px] text-red-400 flex items-center space-x-1 mt-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.clientName}</span>
            </p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#A6A39E] block">
              Confidential Email *
            </label>
            <input
              type="email"
              required
              value={formData.clientEmail}
              onChange={(e) => {
                setFormData({ ...formData, clientEmail: e.target.value });
                if (errors.clientEmail) setErrors({ ...errors, clientEmail: "" });
              }}
              placeholder="client@advisory.com"
              className={`w-full bg-[#0B0D0C] border px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C1AD91] transition-colors ${
                errors.clientEmail ? "border-red-500/80" : "border-white/15"
              }`}
            />
            {errors.clientEmail && (
              <p className="text-[10px] text-red-400 flex items-center space-x-1 mt-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.clientEmail}</span>
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#A6A39E] block">
              Telephone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.clientPhone}
              onChange={(e) => {
                setFormData({ ...formData, clientPhone: e.target.value });
                if (errors.clientPhone) setErrors({ ...errors, clientPhone: "" });
              }}
              placeholder="+1 (212) 555-0199 or +971"
              className={`w-full bg-[#0B0D0C] border px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C1AD91] transition-colors ${
                errors.clientPhone ? "border-red-500/80" : "border-white/15"
              }`}
            />
            {errors.clientPhone && (
              <p className="text-[10px] text-red-400 flex items-center space-x-1 mt-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.clientPhone}</span>
              </p>
            )}
          </div>
        </div>

        {/* City & Advisory Type Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#A6A39E] block">
              Primary City
            </label>
            <select
              value={formData.preferredCity}
              onChange={(e) =>
                setFormData({ ...formData, preferredCity: e.target.value as "Dubai" | "New York" })
              }
              className="w-full bg-[#0B0D0C] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C1AD91] transition-colors"
            >
              <option value="Dubai">Dubai, UAE</option>
              <option value="New York">New York, USA</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#A6A39E] block">
              Consultation Format
            </label>
            <select
              value={formData.advisoryType}
              onChange={(e) => setFormData({ ...formData, advisoryType: e.target.value })}
              className="w-full bg-[#0B0D0C] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C1AD91] transition-colors"
            >
              <option value="In-Person Private Viewing">In-Person Private Viewing</option>
              <option value="Digital Architectural Presentation">Digital Architectural Presentation</option>
              <option value="Portfolio Acquisition Advisory">Portfolio Acquisition Advisory</option>
            </select>
          </div>
        </div>

        {/* Confidential Notes */}
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[#A6A39E] block">
            Bespoke Requirements / Confidential Notes
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Specify preferred timing, automotive accommodation, or portfolio criteria..."
            className="w-full bg-[#0B0D0C] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C1AD91] transition-colors resize-none"
          />
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-[10px] text-[#A6A39E]">
          <Shield className="w-3.5 h-3.5 text-[#C1AD91]" />
          <span>Strict Confidentiality Guaranteed</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#C1AD91] hover:bg-white text-[#0B0D0C] text-xs uppercase tracking-[0.22em] px-8 py-3.5 font-semibold transition-all shadow-xl group disabled:opacity-50"
        >
          <span>{isSubmitting ? "Transmitting..." : "Submit Enquiry"}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </form>
  );
}
