// config.js - Hawari Live
const SUPABASE_URL = "https://hhljyqelqnsltmasxgqv.supabase.co";
const SUPABASE_KEY = "sb_publishable_Xeo54iI9kxJ0n00f71A_yA_QNvmRC3H";

// تأكد إن المتغير db متاح للاستخدام في كل الملفات
let db;
if (typeof window !== 'undefined' && window.supabase) {
  db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}
