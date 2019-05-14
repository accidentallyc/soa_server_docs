module.exports = function(grunt) {

  grunt.initConfig({
		sass: {                              // Task
	    dist: {                            // Target
	    	options:{},
	    	files:{
	    		'./assets/dist/main.css':'./assets/dist/main.scss'
	    	}
	    }
	  },
    concat: {
    	scss:{
	      src: ['./assets/modules/misc/**.scss','./assets/modules/*.scss','./assets/modules/**/*.scss'],
	      dest: './assets/dist/main.scss',
    	},
    	js:{
	    	options:{
					process: function(src) {
	          return `(function (){ ${src} })();`;
	        }
	    	},
	      src: ['./assets/modules/*.js','./assets/modules/**/*.js'],
	      dest: './assets/dist/main.js',
	    }
    },
    jst: {
		  compile: {
		    options: {
		      processName: function(filepath) {
				    return filepath.match(/^(:?\.\/assets\/modules)(.*).html$/).pop()
				  }
		    },
		    files: {
		      './assets/dist/jst.js': ['./assets/modules/**/*.html','./assets/modules/*.html']
		    }
		  }
		},
    watch: {
	    files: ['./assets/modules/*','./assets/modules/**'],
	    tasks: ['build'],
	    options: {
	      interrupt: true,
	    },
    },
    connect: {
	    server: {
	      options: {
	      	keepalive:true,
	        port: 8000,
	        hostname: '*',
	        onCreateServer: function(server, connect, options) {

	        }
	      }
	    }
	  }
  });

	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('build', ['concat','sass','jst']);
  grunt.registerTask('default', ['watch']);
};