China MVC
===============
A simple MVC framework for node.js.

Features
--------

* RESTful routes
* Customized routes
* Support all kinds of view engines supported by Express, default of which is Jade
* View templates can be stored in all kinks of storage
* Sub views

Dependence
--------

ChinaMVC depends on the following node.js packages, you can download them use 'npm' command.

* Express: a framework for fast build a web server via node.js

Directory Rules(for defalt routes)
--------

    ./
    ./app.js
    ./controllers/
    ./controllers/$controller/
    ./controllers/$controller/$action/
    ./controllers/$controller/$action/$httpmethod.js
    ./views/
    ./views/$controller/
    ./views/$controller/$action.jade
    ./views/$controller/$action/$subview.jade


HOW TO USE
================

RESTful Web/API
--------
    // app.js
    // RESTfull routes
    // SELECT
    app.get(/.+\/.*/, function(req, res) {
        (new mvc.context(req, res)).invoke();
    });
    
    // INSERT
    app.post(/.+\/.*/, function(req, res) {
        (new mvc.context(req, res)).invoke();
    });
    
    // DELETE
    app.del(/.+\/.*/, function(req, res) {
        (new mvc.context(req, res)).invoke();
    });
    
    // UPDATE
    app.put(/.+\/.*/, function(req, res) {
        (new mvc.context(req, res)).invoke();
    });

Customized Routes
--------
    // app.js
    
    // route for homepage, controller is 'home' and view is 'index'
    app.get('/', function(req, res) {
        (new mvc.context(req, res)).invoke('home', 'index');
    });

Using Sub Views
---------
    // a controller, e.g. /home/index/get.js
    var subViews = ['view1', 'view2', 'view3'];
    exports.render = function (context) {
        var subView = subViews[Math.floor(Math.random()*100)%3];
        context.view({ layout: false }, subView);
    };

Persistence View Templates in Databases(or any other kinds of storage)
---------
    // This feature is very useful to CMS ect.
    // callback(err<exception>, template<string>)
    function getTemplate(id, callback){
        var template = '!!! 5'; // TODO: get template content from storage.
        callback && callback(null, template);
    }
    exports.render = function (context) {
        getTemplate(context.request.params['id'], function(err, template){
            var render = jade.compile(template);
            
            // view model
            var vm = {};
            
            context.response.send(render({ vm: vm }));
        });
    };

Copyright and License
===========
Copyright 2013 LICHUN

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU General Public License version 2 (the "GPL License"). You may choose either license to govern your use of this software only upon the condition that you accept all of the terms of either the Apache License or the GPL License.

You may obtain a copy of the Apache License and the GPL License in the LICENSE file, or at:

http://www.apache.org/licenses/LICENSE-2.0 http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for the specific language governing permissions and limitations under the Apache License and the GPL License.
