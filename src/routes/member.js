const express = require('express');
const router = express.Router();

const memberController = require('../app/controllers/MemberController');

router.get('/:slug', memberController.show);

module.exports = router;
