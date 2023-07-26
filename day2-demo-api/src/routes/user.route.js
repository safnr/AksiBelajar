const express = require('express');
const userController = require('../controllers/user.controller');
const passport = require('passport');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/edit/:id', passport.authenticate('jwt', {session:false}), userController.update);
router.get('/view', passport.authenticate('jwt', {session:false}), userController.viewUser);
router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), userController.deleteUser);

module.exports = router
