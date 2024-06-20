import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bldrupdsuyhojkrwuroh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZHJ1cGRzdXlob2prcnd1cm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0MzU4NTcsImV4cCI6MjAzNDAxMTg1N30.JuFyhlYXw7NV-49PqBcEiC1sVnLVzjJ3Ybk7H6o-GR0';

export const supabase = createClient(supabaseUrl, supabaseKey);
