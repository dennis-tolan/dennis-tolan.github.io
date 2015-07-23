module.exports = function(grunt) {
	
	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json'),

		shell : {
			jekyllBuild : {
				command : 'jekyll build'
			},
			jekyllServe : {
				command : 'jekyll serve'
			}
		},

		uglify: {
      		build: {
        		src: ['js/*.js','js/libs/*.js'],
        		dest: 'js/build/global.min.js'
    		}
    	},

		cssmin: {
			target: {
				files: {
					'css/build/global.css': ['css/*.css','css/libs/*.css']
				}
			}
		},

		watch: {
			options: {
				interrupt: true,
				atBegin: true
			},
			gruntfile: {
				files: ['Gruntfile.js'],
				tasks: ['shell']
			},
			pages: {
				files: ['index.html','work/*.html','about/*.html','contact/*.html','_data/setting.yml'],
				tasks: ['shell']
			},
			styles: {
				files: ['css/*.css','css/libs/*.css'],
				tasks: ['cssmin','shell']
			},
			scripts: {
				files: ['js/*.js','js/libs/*.js'],
				tasks: ['uglify','shell']
			}
		}
	})

	// register grunt tasks
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// default task(s) // must run 'shell' last
	grunt.registerTask('default', ['uglify','cssmin','shell']);
}