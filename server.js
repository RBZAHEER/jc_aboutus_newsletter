const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); // This is required to parse JSON bodies

// Import and use your routes
const newsletterRoutes = require('./routes/newsletterRoutes');
app.use('/api', newsletterRoutes);

// Database connection
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
