/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function(req, res) {
		req.session.authenticated = true;
	},
	logout: function(req, res) {
		req.session.authenticated = false;
	}

};
