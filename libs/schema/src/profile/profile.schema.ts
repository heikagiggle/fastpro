import { z } from 'zod';

export const createProfileSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  profile_image: z.string().url(),
  dob: z.coerce.date(),
  location: z.string().optional(),
  note: z.string().optional(),
  user_id: z.string().uuid(),
});

export const updateProfileSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  profile_image: z.string().url().optional(),
  dob: z.coerce.date().optional(),
  location: z.string().optional(),
  note: z.string().optional(),
});

export type CreateProfileData = z.infer<typeof createProfileSchema>;
export type UpdateProfileData = z.infer<typeof updateProfileSchema>;
