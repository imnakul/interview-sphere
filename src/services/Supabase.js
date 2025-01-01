import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjtrhyokfgynynepdagw.supabase.co'
const supabaseKey =
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqdHJoeW9rZmd5bnluZXBkYWd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0ODYyMTYsImV4cCI6MjA1MTA2MjIxNn0.e8BtWTdQT9krWJtG3S7xf4qz-Iw93BCE1_jQh_K6OKI'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
