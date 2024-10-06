const Subscriber = require('../models/subscriberModel');

const subscribe = async (req, res) => {
	// Log the request body to ensure you're receiving it

	const { email } = req.body;

	// Check if email was provided
	if (!email) {
		return res.status(400).json({ message: 'Email is required' });
	}
	console.log('Request Body:', req.body);
	try {
		// Check if the email is already subscribed
		const existingSubscriber = await Subscriber.findOne({ email });
		if (existingSubscriber) {
			return res.status(400).json({ message: 'Email is already subscribed' });
		}

		// Save the new subscriber
		const subscriber = new Subscriber({ email });
		await subscriber.save();

		return res.status(201).json({ message: 'Subscription successful', subscriber });
	} catch (error) {
		return res.status(500).json({ message: 'Server Error', error: error.message });
	}
};

module.exports = { subscribe };
