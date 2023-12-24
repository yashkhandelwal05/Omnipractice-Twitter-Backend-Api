const express = require('express');
const router = express.Router();

const authController = require('./controllers/authController');
const messageController = require('./controllers/messageController');
const userController = require('./controllers/userController');

// Define routes
router.get('/healthcheck', (req, res) => {
  res.send('Server is up and running!');
});

router.post('/signup', authController.signup);
router.post('/login', authController.login);

// Message-related routes
router.post('/messages', messageController.postMessage);

router.post('/user/follow', userController.followUser);
router.get('/user/getmyfeeed', userController.getMyFeed);

module.exports = router;
