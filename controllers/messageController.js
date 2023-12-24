const messageService = require('../services/messageService');

const postMessage = async (req, res) => {
    try {
      await messageService.postMessage(req.body);
      res.status(201).json({ message: 'Message posted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = { postMessage };
