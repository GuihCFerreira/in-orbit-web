import z from "zod";

const envSchema = z.object({
  VITE_API_BASE: z.string().url(),
});

export const env = envSchema.parse(import.meta.env.VITE_API_BASE);
