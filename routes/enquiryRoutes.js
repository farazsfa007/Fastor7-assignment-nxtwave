const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiryController');
const auth = require('../middlewares/auth');


// Public submission - no auth
router.post('/public', enquiryController.createPublic);


// Protected routes (require JWT)
router.get('/public', auth, enquiryController.getPublic); // list of unclaimed leads
router.get('/private', auth, enquiryController.getPrivate); // leads claimed by logged-in counselor
router.patch('/:id/claim', auth, enquiryController.claimLead);


module.exports = router;