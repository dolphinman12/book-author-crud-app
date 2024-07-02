import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/book-author-app';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
