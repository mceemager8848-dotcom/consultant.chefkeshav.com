export type ConsultationFormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
  company: string;
};

export type FormErrors = Partial<Record<keyof ConsultationFormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?\d{7,15}$/;

function isValidHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateConsultationForm(
  values: ConsultationFormValues,
): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your active email.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.whatsapp.trim()) {
    errors.whatsapp = "Please enter your WhatsApp number.";
  } else if (!phonePattern.test(values.whatsapp.trim())) {
    errors.whatsapp = "Use 7–15 digits, with an optional + at the start.";
  }

  if (!values.businessName.trim()) {
    errors.businessName = "Please enter your business name.";
  }

  if (values.website.trim() && !isValidHttpUrl(values.website.trim())) {
    errors.website = "Enter a full URL starting with http:// or https://.";
  }

  return errors;
}
