const express = require('express');
const router = express.Router();

const sideController = require('../app/controllers/SideController');

router.get('/', sideController.home);

module.exports = router;
