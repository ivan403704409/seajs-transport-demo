module.exports =function (grunt) {
	
	require('load-grunt-tasks')(grunt);
	var seajsConfig = grunt.file.readJSON('seajsConfig.json');

	var path = {
		src: 'src/',
		dest: 'dist/'
	};

	grunt.initConfig({

		//复制所有文件
		copy: {
			all: {
				expand: true,
				cwd: path.src,
				src: '**/*',
				dest: path.dest
			}
		},


		//提取seajs模块id
		transport: {
			options: {
                paths: [path.dest + 'js/'], 	// where is the module, default value is ['sea-modules']
               	alias: seajsConfig.alias,	// 别名,其实就是seajs的alias
               	debug: false
            },

	        seajs: {
	        	 options: {
                    // idleading: './js/'		//在提取出来的id前面加前辍
                },

	            files: [{
	            	expand: true,
	                cwd: path.dest + 'js/',
	                src: ['**/*.js', '!**/seajs/*.js'],
	                dest: path.dest + 'js/'
	            }]
	        }
	    },


		//压缩js
		uglify: {
			js: {
				files: [
					{
						expand: true,
						cwd: path.dest + 'js/',
						src: ['**/*.js'],
						dest: path.dest + 'js/'
					}
				]
			}
		},

		//压缩css
		cssmin: {
			css: {
				files: [
					{
						expand: true,
						cwd: path.dest + 'css/',
						src: '*.css',
						dest: path.dest + 'css/'
					}
				]
			}
		},

		//压缩图片
		imagemin: {
			static: {
				files: [
					{
						expand: true,
						cwd: path.dest,
						src: 'images/**/*.{jpg,png,gif}',
						dest: path.dest
					}
				]
			}
		},

		//清除文件
		clean: {
			all: {
				src: path.dest + '**/*'
			}
		},

		//实时监听，自动执行
		watch: {
			all: {
				files: [path.dest + '**/*'],
				tasks: ['copy', 'cssmin', 'uglify']
			}
		}

	});

	// grunt.registerTask('build',['clean', 'copy', 'transport', 'cssmin', 'uglify', 'imagemin']);
	grunt.registerTask('build',['clean', 'copy', 'transport']);

};