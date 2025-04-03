const dotenv = require('dotenv');
const path = require('path');
const envPath = path.resolve(__dirname, '../../.env.local');
console.log('Loading env from:', envPath);
dotenv.config({ path: envPath });
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;


if (!MONGODB_URI) {
  console.error('Please define the MONGODB_URI environment variable inside .env.local');
  process.exit(1);
}

async function testConnection() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Successfully connected to MongoDB');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

testConnection();
