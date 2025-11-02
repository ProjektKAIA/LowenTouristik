// components/forms/ContactForm/ContactForm.types.ts
export interface ContactFormProps {
  className?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactFormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
}