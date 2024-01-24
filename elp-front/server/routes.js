const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/courses', controller.courses.getAllCourses);
router.get('/courses/id', controller.courses.getCourseById);
router.post('/courses', controller.courses.postCourse);
router.put('/courses/id', controller.courses.putCourseById);
router.put('/courses/enroll', controller.courses.putUserInCourseById);
router.delete('/courses/id', controller.courses.deleteCourseById);

router.get('/users', controller.users.getUsers);
router.get('/users/id', controller.users.getUserById);
router.get('/users/name', controller.users.getUserLastByName);
router.post('/users', controller.users.postUser);
router.put('/users/id', controller.users.putUserById);
router.delete('/users/id', controller.users.deleteUserById);

router.get('/courses/feedback', controller.feedback.getAllFeedback);
router.get('/courses/feedback/id', controller.feedback.getFeedbackById);
router.post('/courses/feedback/id', controller.feedback.postFeedbackByCourseId);
router.put('/courses/feedback/id', controller.feedback.putFeedbackById);
router.delete('/courses/feedback/id', controller.feedback.deleteFeedbackById);

module.exports = router;