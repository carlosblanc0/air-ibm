const express = require('express')
const router = express.Router()
const Auth = require('./controllers/AuthController')
const Workplace = require('./controllers/WorkplaceController')

router.post('/auth', Auth.store);
router.post('/workplace', Workplace.store);

module.exports = router
