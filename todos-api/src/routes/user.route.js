const express = require('express');
const userController = require('../controllers/user.controller');
const passport = require('passport');

const router = express.Router();

router.post('/create', userController.createTodos);
router.put('/edit/:id', passport.authenticate('jwt', {session:false}), userController.updateTodos);
router.get('/viewTodo/:id', passport.authenticate('jwt', {session:false}), userController.viewTodo);
router.get('/viewTodos/:userId', passport.authenticate('jwt', {session:false}), userController.viewTodos);
router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), userController.deleteTodo);

module.exports = router