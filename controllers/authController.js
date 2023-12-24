const authService = require('../services/authService');

const signup = async (req, res) => {
  try {
    await authService.signup(req.body);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login function
const login = async (req, res) => {
  try {
    await authService.login(req.body);
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signup, login };