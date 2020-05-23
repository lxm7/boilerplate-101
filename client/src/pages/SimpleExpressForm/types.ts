import React from "react";

export interface FormData {
  values: FormValues;
  errors: Partial<FormValues>;
  meta: FormMeta;
  [key: string]: any;
}

export interface FormValues {
  name: string;
  email: string;
  message: string;
  newsletter: boolean;
  [key: string]: any;
}

export interface FormMeta {
  submitMessage: string;
  isSubmitting: boolean;
}

export interface InputProps {
  name: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent) => void;
  validation: React.ReactNode;
}

export interface EventTarget {
  name: string;
  type: string;
  checked: boolean;
  value: string;
}
