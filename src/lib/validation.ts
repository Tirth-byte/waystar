export interface ValidationError {
  field: string;
  message: string;
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone: string): boolean {
  // Allow international formatting with +, spaces, dashes, parentheses, at least 7 digits
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7;
}

export function validateViewingForm(data: {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  preferredCity?: string;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.clientName || data.clientName.trim().length < 2) {
    errors.clientName = "Please provide your full legal name or advisory entity.";
  }

  if (!data.clientEmail || !validateEmail(data.clientEmail)) {
    errors.clientEmail = "A valid confidential email address is required.";
  }

  if (!data.clientPhone || !validatePhone(data.clientPhone)) {
    errors.clientPhone = "Please provide a valid direct contact telephone number.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

