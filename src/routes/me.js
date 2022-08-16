const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/member/create', meController.create);
router.get('/member/trash', meController.trash);
router.get('/member/:id/edit', meController.edit);
router.get('/member/:id/restore', meController.restore);
router.post('/member/stored/', meController.stored);
router.put('/member/stored/:id', meController.edit_req);
router.delete('/member/delete/:id', meController.delete);
router.delete('/member/remove/:id', meController.remove);
router.get('/member', meController.list);

module.exports = router;
