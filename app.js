var express = require('express'), path = require('path'), url = require('url'), mvc = require('mvc'), fs = require('fs');

var app = module.exports = express.createServer(express.bodyParser())
// configuring
.configure(function () {
    this.set('views', path.join(__dirname, "views"));
    this.set('view engine', 'txt');
    this.register('txt', require('jade'));
});

// RESTfull
// SELECT
app.get(/.*/, function (req, res) {
    (new mvc.context(req, res)).invoke();
});

// INSERT
app.post(/.*/, function (req, res) {
    (new mvc.context(req, res)).invoke();
});

// DELETE
app.del(/.*/, function (req, res) {
    (new mvc.context(req, res)).invoke();
});

// UPDATE
app.put(/.*/, function (req, res) {
    (new mvc.context(req, res)).invoke();
});

app.listen(process.env.PORT);