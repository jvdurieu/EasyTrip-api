/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var passport = require('passport');

module.exports = {
	login: function (req, res) {
		res.view();
	},

	process: function (req, res) {
		passport.authenticate('local', function (err, user, info) {
      sails.log.info(info);
      sails.log.info(user);
      sails.log.info(err);
			if (err || !user) {
				return res.send(err);
			}
			req.login(user, function(err) {
				if (err) res.send(err);
				return res.send('login successful');
			});
		}) (req, res);
	},

	logout: function (req, res) {
		req.logout();
		res.send('logout successful');
	},

  free: function (req, res) {
    res.send('OK');
  },

  needLogin: function (req, res) {
    sails.log.info("needLogin: " + req.user);
    if (typeof(req.user) === 'undefined') {
      res.redirect("/contact");
    }
    res.send('needLogin');
  }
};

module.exports.blueprints = {
	actions: true,
	rest: true,
	shortcuts: true
};
