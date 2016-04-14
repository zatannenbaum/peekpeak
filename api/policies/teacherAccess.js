/**
 * teacherAccess
 * @module      :: Policy
 * @description :: Simple policy to allow only specific user types to access certain pages
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.usertype === "teacher" || req.session.usertype === "admin") {
    return next();
  }

  // User is not allowed
  return res.forbidden('You are not permitted to perform this action.');
};
