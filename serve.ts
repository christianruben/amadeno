import { serve } from "https://deno.land/std@0.142.0/http/server.ts";
serve(_ => new Response("Hello World\n"));
