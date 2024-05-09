import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

export const supabase = createClient<Database>(
	'https://fpsgwqzoxaquolymvygp.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwc2d3cXpveGFxdW9seW12eWdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3NDc3NjEsImV4cCI6MjAyNzMyMzc2MX0.jjTNYRhBPsXPnydt27O5OnhpDVq8652f1HwwdoqbGtQ',
);
