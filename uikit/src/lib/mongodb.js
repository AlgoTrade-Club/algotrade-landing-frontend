const dotenv = require('dotenv');
const path = require('path');
const envPath = path.resolve(__dirname, '../../.env.local');
console.log('Loading env from:', envPath);
dotenv.config({ path: envPath });
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then(mongoose => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;