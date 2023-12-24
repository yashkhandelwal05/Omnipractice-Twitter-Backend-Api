const userService = require('../services/userService');

const followUser = async (req, res) => {
  try {
    const message = await userService.followUser(req.body);
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMyFeed = async (req, res) => {
    try {
      const message = await userService.getMyFeed(req.body);
      res.status(200).json({ feed: message });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { followUser, getMyFeed };
