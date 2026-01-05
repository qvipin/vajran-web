"use client";

import { useState, useRef, useEffect } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const COOLDOWN_KEY = "vajran_contact_cooldown";
const COOLDOWN_DURATION = 12 * 60 * 60 * 1000; // 12 hours in ms

export default function Contact() {
  const [budget, setBudget] = useState(2500);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [cooldownEnd, setCooldownEnd] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const captchaRef = useRef<HCaptcha>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Check for existing cooldown on mount
  useEffect(() => {
    const stored = localStorage.getItem(COOLDOWN_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      if (data.endTime > Date.now()) {
        setCooldownEnd(data.endTime);
        setSubmittedEmail(data.email || "");
        setIsSuccess(true);
      } else {
        localStorage.removeItem(COOLDOWN_KEY);
      }
    }
  }, []);

  // Update countdown timer
  useEffect(() => {
    if (!cooldownEnd) return;

    const updateTimer = () => {
      const remaining = cooldownEnd - Date.now();
      if (remaining <= 0) {
        setCooldownEnd(null);
        setIsSuccess(false);
        localStorage.removeItem(COOLDOWN_KEY);
        return;
      }

      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      setTimeRemaining(`${hours}h ${minutes}m`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [cooldownEnd]);

  const getBudgetLabel = (value: number) => {
    if (value <= 500) return "Starter";
    if (value <= 1500) return "Amateur";
    if (value <= 4000) return "Professional";
    if (value <= 7500) return "Business";
    return "Enterprise";
  };

  const formatCurrency = (value: number) => {
    if (value >= 10000) return "$10k+";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    // Trigger hCaptcha - form will submit after verification
    captchaRef.current?.execute();
  };

  const onCaptchaVerify = async (token: string) => {
    if (!formRef.current) return;

    setIsSubmitting(true);
    setError("");

    const formData = new FormData(formRef.current);
    const email = formData.get("email") as string;

    const data = {
      access_key: "0f947ad7-5bbe-438d-baa1-54da98abd680",
      subject: `New Inquiry from ${formData.get("name")} - ${getBudgetLabel(budget)}`,
      from_name: "Vajran Website",
      name: formData.get("name"),
      email: email,
      company: formData.get("company") || "Not provided",
      budget: `${formatCurrency(budget)} (${getBudgetLabel(budget)})`,
      message: formData.get("message"),
      "h-captcha-response": token,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        const endTime = Date.now() + COOLDOWN_DURATION;
        setCooldownEnd(endTime);
        setSubmittedEmail(email);
        setIsSuccess(true);
        localStorage.setItem(COOLDOWN_KEY, JSON.stringify({ endTime, email }));
        formRef.current?.reset();
        setBudget(2500);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
      captchaRef.current?.resetCaptcha();
    }
  };

  const onCaptchaError = () => {
    setError("Captcha verification failed. Please try again.");
    setIsSubmitting(false);
  };

  const onCaptchaExpire = () => {
    setError("Captcha expired. Please try again.");
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-border">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            05 — Contact
          </span>
          <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Let&apos;s build
              <span className="italic text-muted-foreground"> something.</span>
            </h2>
            <div className="text-sm text-muted-foreground lg:text-right">
              <span className="uppercase tracking-widest">We respond in</span>
              <div className="font-serif text-2xl md:text-3xl leading-tight text-foreground mt-1">
                6-12 business{" "}
                <span className="line-through text-muted-foreground decoration-red-500 decoration-2">days</span>{" "}
                <span className="italic">hours.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form - Takes 2 columns */}
          <div className="lg:col-span-2 relative min-h-[500px]">
            {/* Success Overlay */}
            {isSuccess && (
              <div className="absolute inset-0 bg-background z-10 flex items-center justify-center">
                <div className="text-center max-w-md px-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-foreground flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-4">Message Sent</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    We&apos;ll respond to <span className="text-foreground">{submittedEmail}</span> within 6-12 business hours. Check your spam folder too.
                  </p>
                  {timeRemaining && (
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      You can submit again in {timeRemaining}
                    </p>
                  )}
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Didn&apos;t receive a response? Email us directly at{" "}
                      <a href="mailto:hello@vajran.com" className="text-foreground underline underline-offset-2 hover:opacity-70">
                        hello@vajran.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Honeypot for spam */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  maxLength={50}
                  className="input"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  maxLength={100}
                  className="input"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="company" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Company / Project <span className="text-muted-foreground/50">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Acme Inc. or My Startup Idea"
                  maxLength={100}
                  className="input"
                />
              </div>

              <div className="md:col-span-2">
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="budget" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Budget
                  </label>
                  <span className="text-xs text-muted-foreground">
                    {getBudgetLabel(budget)}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs text-muted-foreground">$75</span>
                  <input
                    type="range"
                    id="budget"
                    min={75}
                    max={10000}
                    step={25}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="flex-1"
                  aria-label="Budget slider"
                  />
                  <span className="text-xs text-muted-foreground">$10k+</span>
                  <span className="font-serif text-2xl md:text-3xl min-w-[100px] text-right">
                    {formatCurrency(budget)}
                  </span>
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your vision..."
                  className="input resize-none overflow-y-auto"
                />
              </div>

              {error && (
                <div className="md:col-span-2">
                  <p className="text-sm text-red-500">{error}</p>
                </div>
              )}

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </div>

              {/* hCaptcha - invisible, triggered on submit */}
              <HCaptcha
                ref={captchaRef}
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                size="invisible"
                reCaptchaCompat={false}
                onVerify={onCaptchaVerify}
                onError={onCaptchaError}
                onExpire={onCaptchaExpire}
              />
            </form>
          </div>

          {/* Info - Takes 1 column */}
          <div className="lg:border-l lg:border-border lg:pl-12">
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Location
                </div>
                <div className="text-sm">Cumming, GA</div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Email Us
                </div>
                <a
                  href="mailto:hello@vajran.com"
                  className="text-sm underline underline-offset-2 hover:opacity-70 transition-opacity"
                >
                  hello@vajran.com
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                We respond to every inquiry. Expect a reply before the day is over.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
