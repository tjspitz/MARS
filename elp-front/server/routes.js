const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/courses', controller.courses.getAllCourses);
router.get('/courses/id', controller.courses.getCourseById);

module.exports = router;