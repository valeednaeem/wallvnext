import mongoose from 'mongoose';

// Ensure MONGODB_URI is defined
// Prefer environment variable (secure & production-ready)
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://127.0.0.1:27017/erm"; // fallback for local testing ONLY

// Database name (clean separation of data)
const DB_NAME = "erm";

if (!MONGODB_URI) throw new Error('Define MONGODB_URI in .env.local');

// Cache connection to handle Hot Module Replacement in dev
let cached = (global as any).mongoose;
if (!cached) cached = (global as any).mongoose = { conn: null, promise: null };

// Establish database connection
async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) cached.promise = mongoose.connect(MONGODB_URI!);
  cached.conn = await cached.promise;
  return cached.conn;
}
export default dbConnect;