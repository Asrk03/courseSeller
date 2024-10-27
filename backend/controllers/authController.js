const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

  // Generate JWT
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

  // Signup Controller
exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      	const userExists = await User.findOne({ email });
      	if (userExists) {
        	return res.status(400).json({ message: 'User already exists' });
		}

		const user = await User.create({ username, email, password });
		const token = generateToken(user._id);

		res.status(201).json({ message: 'User created successfully', token });
		} catch (error) {
			res.status(500).json({ message: 'Server error', error });
		}
  };

  // Login Controller
exports.login = async (req, res) => {
		const { email, password } = req.body;
		try {
			const user = await User.findOne({ email });
			if (!user) {
				return res.status(400).json({ message: 'Invalid credentials' });
			}

			const isMatch = await user.comparePassword(password);
			if (!isMatch) {
				return res.status(400).json({ message: 'Invalid credentials' });
			}

			const token = generateToken(user._id);
			res.status(200).json({ message: 'Login successful', token });
		} catch (error) {
				res.status(500).json({ message: 'Server error', error });
		}
};
