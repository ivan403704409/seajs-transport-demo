/**
 * 配置项目
 *
 */
seajs.config({
	"base":"./js/",
	"alias":{
		"zepto": "lib/zepto/1.1.3/zepto.js",
		"tips": "main/tips/0.1.0/tips.js",		
		"dialog": "main/dialog/0.1.0/dialog.js"
	},
	"map": [
		[".js",".js?v2"]
	],
"debug":2
});