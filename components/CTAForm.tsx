"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ConsultationFormValues,
  FormErrors,
  validateConsultationForm,
} from "@/lib/validation";

const initialValues: ConsultationFormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: "",
  company: "",
};

type FieldProps = {
  id: keyof ConsultationFormValues;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: "text" | "email" | "url" | "tel";
  autoComplete?: string;
  inputMode?: "email" | "tel" | "url";
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function ErrorMessage({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={`${id}-error`} className="mt-2 flex items-start gap-1.5 text-sm font-semibold text-red-700">
      <span aria-hidden="true" className="leading-5">
        !
      </span>
      <span>{message}</span>
    </p>
  );
}

function Field({
  id,
  label,
  placeholder,
  required = false,
  type = "text",
  autoComplete,
  inputMode,
  value,
  error,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-ink">
        {label} {required && <span aria-hidden="true" className="text-brand">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 min-h-12 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-3 focus:ring-brand/20"
      />
      <ErrorMessage id={id} message={error} />
    </div>
  );
}

export default function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateValue(field: keyof ConsultationFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (values.company) return;

    const nextErrors = validateConsultationForm(values);
    setErrors(nextErrors);

    const firstInvalidField = Object.keys(nextErrors)[0];
    if (firstInvalidField) {
      const field = event.currentTarget.elements.namedItem(firstInvalidField);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    setIsSubmitting(true);

    // TODO: Replace this simulation with a real Formspree, Google Sheets, email API, or CRM request before launch.
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    router.push("/thank-you");
  }

  return (
    <section id="book-call" className="scroll-mt-4 bg-brand-soft py-16 sm:py-24" aria-labelledby="form-title">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/80 bg-white p-5 shadow-[0_24px_70px_rgba(22,85,232,0.14)] sm:p-9 lg:p-11">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand">
              Book the Call
            </p>
            <h2 id="form-title" className="mt-3 text-balance text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl">
              One-to-One Consultation
            </h2>
            <p className="mt-3 text-base font-semibold text-body sm:text-lg">
              Customized Strategy for Your Business
            </p>
          </div>

          <form className="mt-8 space-y-5" noValidate onSubmit={handleSubmit}>
            <Field
              id="fullName"
              label="Full Name"
              placeholder="Your full name"
              required
              autoComplete="name"
              value={values.fullName}
              error={errors.fullName}
              onChange={(value) => updateValue("fullName", value)}
            />
            <Field
              id="email"
              label="Active Email"
              placeholder="you@example.com"
              required
              type="email"
              inputMode="email"
              autoComplete="email"
              value={values.email}
              error={errors.email}
              onChange={(value) => updateValue("email", value)}
            />
            <Field
              id="whatsapp"
              label="WhatsApp Number"
              placeholder="+9779800000000"
              required
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.whatsapp}
              error={errors.whatsapp}
              onChange={(value) => updateValue("whatsapp", value)}
            />
            <Field
              id="businessName"
              label="Business Name"
              placeholder="Your restaurant name"
              required
              autoComplete="organization"
              value={values.businessName}
              error={errors.businessName}
              onChange={(value) => updateValue("businessName", value)}
            />
            <Field
              id="website"
              label="Website or Facebook URL"
              placeholder="https://example.com"
              type="url"
              inputMode="url"
              autoComplete="url"
              value={values.website}
              error={errors.website}
              onChange={(value) => updateValue("website", value)}
            />
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-ink">
                Anything You Want to Say
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us anything that will help us understand your restaurant."
                value={values.message}
                onChange={(event) => updateValue("message", event.target.value)}
                className="mt-2 w-full resize-y rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-3 focus:ring-brand/20"
              />
            </div>

            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.company}
                onChange={(event) => updateValue("company", event.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex min-h-13 w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 text-base font-bold text-white shadow-[0_14px_32px_rgba(22,85,232,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Booking…" : "Book Free Consultation"}
            </button>
            <p className="text-center text-sm font-medium text-body">
              We respect your privacy. No spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
