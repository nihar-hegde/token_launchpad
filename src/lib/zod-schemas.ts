import z from "zod";

export const TokenSchema = z.object({
  name: z.string().min(2, {
    message: "Token name must be at least 2 characters.",
  }),

  symbol: z.string().min(2, {
    message: "Token symbol must be at least 2 characters.",
  }),

  imageUrl: z.string().min(2, {
    message: "Token image url must be at least 2 characters.",
  }),

  tokenSupply: z.string().min(2, {
    message: "Token image url must be at least 2 characters.",
  }),
});
