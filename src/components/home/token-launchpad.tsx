import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TokenSchema } from "@/lib/zod-schemas";

export const TokenLaunchPad = () => {
  const form = useForm<z.infer<typeof TokenSchema>>({
    resolver: zodResolver(TokenSchema),
    defaultValues: {
      name: "",
      symbol: "",
      imageUrl: "",
      tokenSupply: "",
    },
  });
  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>Solana Token LaunchPad</CardTitle>
          <CardDescription>Solana Token LaunchPad</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
};
function zodResolver(
  TokenSchema: z.ZodObject<
    {
      name: z.ZodString;
      symbol: z.ZodString;
      imageUrl: z.ZodString;
      tokenSupply: z.ZodString;
    },
    "strip",
    z.ZodTypeAny,
    { symbol: string; name: string; imageUrl: string; tokenSupply: string },
    { symbol: string; name: string; imageUrl: string; tokenSupply: string }
  >,
):
  | import("react-hook-form").Resolver<
      { symbol: string; name: string; imageUrl: string; tokenSupply: string },
      any
    >
  | undefined {
  throw new Error("Function not implemented.");
}
