import { z } from 'zod';

const stringValidation = (field = 'Name', min = 2, max = 50) =>
  z
    .string()
    .min(min, `${field} must be at least ${min} characters.`)
    .max(max, `${field} must be less than ${max} characters.`);

export const UserFormValidation = z.object({
  name: stringValidation('Username', 2, 50),
  email: z.string().email('Invalid email'),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number.'),
});

export const PatientFormValidation = z.object({
  name: stringValidation(),
  email: z.string().email('Invalid email'),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number.'),
  birthDate: z.coerce.date(),
  gender: z.enum(['Male', 'Female', 'Other']),
  address: stringValidation('Address', 5, 500),
  occupation: stringValidation('Occupation', 5, 500),
  emergencyContactName: stringValidation('Contact name', 2, 50),
  emergencyContactNumber: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number.'),
  primaryPhysician: z.string().min(2, 'You must select at least one doctor.'),
  insuranceProvider: stringValidation('Insurance', 2, 50),
  insurancePolicyNumber: stringValidation('Policy Number', 2, 50),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: 'You must consent to treatment in order to proceed',
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: 'You must consent to disclosure in order to proceed',
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: 'You must consent to privacy in order to proceed',
    }),
});
