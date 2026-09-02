import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(2, "name").max(120),
  dni: z
    .string()
    .trim()
    .regex(/^\d{7,8}$/, "dni"),
  email: z.string().trim().email("email"),
  phone: z
    .string()
    .trim()
    .min(8, "phone")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "phone"),
  currency: z.enum(["ARS", "USD"]).optional(),
  acceptedBases: z.boolean().refine((value) => value === true, {
    message: "acceptedBases",
  }),
  ageConfirmed: z.boolean().refine((value) => value === true, {
    message: "ageConfirmed",
  }),
  marketingOptIn: z.boolean().optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
