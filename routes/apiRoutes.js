var express = require('express');
var router = express.Router();
var auth = require('../api/auth/auth');
var user = require('../api/userCtrl');
var tpr = require('../api/tprCtrl');
var admin = require('../api/adminCtrl');
var roles = require('../api/auth/roles');

/*
*AUTHENTICATION ROUTES
*/
router.post('/login', auth.alreadyLoggedIn, auth.loginAuthenticate);
router.post('/logout', auth.logout);

/*
/USER ROUTES
*/
router.get('/appliedFor', auth.isLoggedIn, user.appliedFor);
router.get('/placedIn', auth.isLoggedIn, user.placedIn);

/*
*ROUTES RELATED TO COMPANY
*/
router.post('/company/add', auth.isLoggedIn, roles.isAuthorized, tpr.addCompany);
router.post('/company/edit', auth.isLoggedIn, roles.isAuthorized, tpr.editCompany);
router.get('/company/all', auth.isLoggedIn, user.listAll);
router.get('/company/canApply', auth.isLoggedIn, user.canApply);

/*
*TPR ROUTES
*/
router.post('/invite', auth.isLoggedIn, roles.isTpr, tpr.ifBranch, tpr.inviteAll);
router.get('/inviteSent', auth.isLoggedIn, roles.isTpr, tpr.ifBranch, tpr.inviteSent);
router.get('/database', auth.isLoggedIn, roles.isTpr, tpr.getDatabase);
router.get('/ifDb', auth.isLoggedIn, roles.isTpr, tpr.ifDb);
router.post('/uploadDb', auth.isLoggedIn, roles.isTpr, tpr.uploadDatabase);
router.post('/addDb', auth.isLoggedIn, roles.isTpr, tpr.addDatabase);
router.post('/ifAddedToDb', auth.isLoggedIn, roles.isTpr, tpr.getDatabase);
/*
*ADMIN ROUTES
*/
router.post('/admin/addtpr', auth.isLoggedIn, roles.isAdmin, auth.signupAuthenticate);
router.get('/database/:branch', auth.isLoggedIn, roles.isAdmin, admin.getDatabase);

router.get('*', function(req, res){
  res.redirect('/');
})
module.exports = router;
