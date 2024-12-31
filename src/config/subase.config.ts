import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://bqwtkoxrkopamdladeir.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxd3Rrb3hya29wYW1kbGFkZWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4NzYxNjcsImV4cCI6MjA0NzQ1MjE2N30.FoVKT6sxapZsbjzU-jHso1OFGXQbKtTIoVkPafmEo2A"
);
