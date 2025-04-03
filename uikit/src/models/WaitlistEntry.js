import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address']
  }
}, {
  timestamps: true
});

const WaitlistEntry = mongoose.models.WaitlistEntry || mongoose.model('WaitlistEntry', waitlistSchema);

export default WaitlistEntry;