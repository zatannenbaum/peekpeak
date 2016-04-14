/**
 * adminAccess
 * @module      :: Policy
 * @description :: Simple policy to allow only admin user types to access certain pages
 *
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is not allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.usertype === "admin") {
    return next();
  }

  // User is not allowed
  return res.forbidden('You are not permitted to perform this action.');
};
