const express = require('express');
const router = express.Router();
const faqController = require('../app/api/controllers/faq');

router.get('/', faqController.getAll);
router.post('/', faqController.create);
router.get('/:faqId', faqController.getById);
router.delete('/:faqId', faqController.delete);

module.exports = router;