define("main/test", [ "lib/zepto/1.1.3/zepto", "./a", "./b", "main/tips/0.1.0/tips", "main/dialog/0.1.0/dialog" ], function(require) {
    var $ = require("lib/zepto/1.1.3/zepto.js");
    var a = require("./a");
    var b = require("./b");
    var tips = require("main/tips/0.1.0/tips.js");
    var dialog = require("main/dialog/0.1.0/dialog.js");
    console.log($);
    console.log(a);
    console.log(b);
    console.log(tips);
    console.log(dialog);
});
