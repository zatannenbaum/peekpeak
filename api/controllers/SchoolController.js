/**
 * SchoolController
 *
 * @description :: Server-side logic for managing schools
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getSchools: function(req, res) {
		LoginService.getSchools(function(schools) {
			res.json(schools);
		});
	},
	addSchool: function(req, res) {
		var schoolVal = (req.body.school) ? req.body.school : undefined
		var cityVal = (req.body.city) ? req.body.city : undefined
		var stateVal = (req.body.state) ? req.body.state : undefined
		CreateService.addSchool(schoolVal, cityVal, stateVal, function(success) {
				res.json(success);
		});
	}
};
