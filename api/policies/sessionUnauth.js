/**
 * sessionUnauth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow only unauthenticated users to access login/signup page
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is not allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.username != null && req.session.authenticated) {
    return res.redirect('/');
  }

  // User is allowed
  return next();
};
