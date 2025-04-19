import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rogxjfzbwethsxbgsycq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvZ3hqZnpid2V0aHN4YmdzeWNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4Nzk2MzIsImV4cCI6MjA2MDQ1NTYzMn0.sqNCny7KIlN7z_yhqrCbHFlmICXHFgOUxqM_zQSVXJ0'

export const supabase = createClient(supabaseUrl, supabaseKey)