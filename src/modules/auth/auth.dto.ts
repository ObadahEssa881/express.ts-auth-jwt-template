import z from "zod";

export const registerDto = z.object({
  body: z
    .object({
      username: z.string().min(2, "Name is too short"),
      email: z.email("Invalid email"),
      password: z.string().min(8, "password at least 8 characteres"),
      confirmPassword: z.string().min(8),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match",
          path: ["confirmPassword"],
        });
      }
    }),
});

export const loginDto = z.object({
  body: z.object({
    email: z.email(),
    password: z.string().min(8),
  }),
});

export type registerDto = z.infer<typeof registerDto>["body"];
export type loginDto = z.infer<typeof loginDto>["body"];
