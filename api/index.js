import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Failed to connect to MongoDB', error);
});

// Initialize http server
const app = express();

app.use(express.json()); // parse json bodies

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//test route
// app.get('/', (req, res) => {
//     res.json({ message: 'API is running' });
// });

// Import routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);