// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://godscnaggshhbqmnzzlc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvZHNjbmFnZ3NoaGJxbW56emxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MzY5MDcsImV4cCI6MjA2MjMxMjkwN30.6tWQH5DipAZieUA24E62IuoUpArFoaU4r9D2To63zW4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);