this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/dictionary.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="site-wrapper">\n\n  <div class="site-wrapper-inner">\n\n    <div class="cover-container">\n\n      <div class="masthead clearfix">\n        <div class="inner">\n          <div class="masthead-brand"><a href="/" class="btn btn-lg btn-pp"></a></div>\n          <nav>\n            <ul class="nav masthead-nav">\n              <li><a href="/playnow" class="btn btn-lg btn-play"></a></li>\n              <li class="active"><a href="/dictionary" class="btn btn-lg btn-dict"></a></li>\n              <li><a href="/story" class="btn btn-lg btn-story"></a></li>\n              <li><a href="/teacher" class="btn btn-lg btn-teacher"></a></li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n\n      <div class="container" ng-controller="dictionaryCtrl as word">\n        <div id="word-list" class="row">\n          <div class="col-sm-4 col-sm-offset-4">\n            <div class="list-group" ng-repeat="singleWord in words">\n              <label>\n                {{ singleWord.word }}\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="mastfoot">\n        <div class="inner">\n          <p>Created by SpeakSoft 2016</p>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n';

}
return __p
};