'use strict';
module.exports = function(grunt) {
  // Load all tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time
  require('time-grunt')(grunt);

  grunt.initConfig({
    less: {
      dev: {
        files: {
          'assets/css/main.css': [
            'assets/less/main.less'
          ]
        },
        options: {
          compress: false,
          // LESS source map
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
          sourceMap: true,
          sourceMapFilename: 'assets/css/main.css.map',
          sourceMapRootpath: '/app/themes/roots/'
        }
      },
      build: {
        files: {
          'assets/css/main.min.css': [
            'assets/less/main.less'
          ]
        },
        options: {
          compress: true
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': ['assets/js/scripts.js']
        }
      },
      modernizr: {
        files: {
          'assets/js/vendor/modernizr.min.js': ['assets/js/vendor/modernizr-*.js']
        }
      }
    },
    version: {
      default: {
        options: {
          format: true,
          manifest: 'assets/manifest.json',
          querystring: {
            style: 'roots_css',
            script: 'roots_js'
          }
        },
        files: {
          'lib/scripts.php': 'assets/{css,js}/{main,scripts}{.min,}.{css,js}'
        }
      }
    },
    watch: {
      less: {
        files: [
          'assets/less/*.less'
        ],
        tasks: ['less:dev', 'version']
      },
      js: {
        files: [
          'assets/js/*.js'
        ],
        tasks: ['version']
      }
    },
    clean: {
      dist: [
        'assets/css/main.min.css',
        'assets/css/main.css.map',
        'assets/js/scripts.min.js',
        'assets/js/vendor/modernizr.min.js'
      ]
    }
  });

  // Register tasks
  grunt.registerTask('default', [
    'dev'
  ]);
  grunt.registerTask('dev', [
    'less:dev',
    'version'
  ]);
  grunt.registerTask('build', [
    'clean:dist',
    'less:build',
    'uglify',
    'version'
  ]);
};
