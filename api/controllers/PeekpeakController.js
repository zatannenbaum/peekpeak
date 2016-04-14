/**
 * PeekpeakController
 *
 * @description :: Server-side logic for managing peekpeaks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login:function(req,res){
		return res.view('login', {layout: 'layouts/LoginLayout'});
	},
	signup:function(req,res){
		return res.view('signup', {layout: 'layouts/SignupLayout'});
	},
	home:function(req,res){
		return res.view('homepage', {layout: 'layouts/HomepageLayout'});
	},
	playnow:function(req,res){
		return res.view('playnow', {layout: 'layouts/PlaynowLayout'});
	},
	dictionary:function(req,res){
		return res.view('dictionary', {layout: 'layouts/DictionaryLayout'});
	},
	story:function(req,res){
		return res.view('story', {layout: 'layouts/StoryLayout'});
	},
	teacher:function(req,res){
		return res.view('teacher', {layout: 'layouts/TeacherLayout'});
	},
	create:function(req,res){
		return res.view('create', {layout: 'layouts/CreateLayout'});
	}
};
