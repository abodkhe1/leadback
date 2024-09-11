const mongoose = require('mongoose');

// MongoDB connection string (local or cloud)
const connectionString = 'mongodb+srv://ajitbodkhe2017:bQ2wJLHRXP3Dcxq0@mymongodb.msv2t.mongodb.net/?retryWrites=true&w=majority&appName=mymongodb';
// If you want to switch to local, you can use this line:
// const connectionString = 'mongodb://localhost:27017/leaddatabase';

// Connect to MongoDB
mongoose.connect(connectionString, {
    useNewUrlParser: true,   // Parses MongoDB connection strings correctly
    useUnifiedTopology: true // Uses the new server discovery and monitoring engine
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

module.exports = mongoose;
