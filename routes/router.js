const express = require('express')
const router = express.Router();
const indexcontroller = require('../controller/indexcontroller');
const admincontroller = require('../controller/admincontroller');

// router / get portt => controller
router.route('/')
    .get(indexcontroller.render)
    .post(indexcontroller.newFeedback);

// router /admin get port => controller
router.route('/admin')
    .get(admincontroller.render)
    .post(admincontroller.updateStatus);

module.exports = router;