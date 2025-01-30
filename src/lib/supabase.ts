import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://yiloqejjrykfbgmywitn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbG9xZWpqcnlrZmJnbXl3aXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMTU5NTIsImV4cCI6MjA1Mzc5MTk1Mn0.NxRjM11ak9qdfaD1nvJJFUjwuxXt_5yWrbC2w4gzFbo';
export const supabase = createClient(supabaseUrl, supabaseKey);
