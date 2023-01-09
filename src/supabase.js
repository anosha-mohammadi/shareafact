import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aibwgcyfxunwslnkyxrd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpYndnY3lmeHVud3Nsbmt5eHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2NjEzNDcsImV4cCI6MTk4ODIzNzM0N30.8VHOv7ArWzd775lPEeYyrfRTVhys_fqlURA0q7127Ow";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
