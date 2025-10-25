import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { executeAI } from "@/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    executeAI
  ],
});