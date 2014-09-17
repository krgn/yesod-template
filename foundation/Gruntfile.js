module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    concat: {
      js: {
        src: ['bower_components/fastclick/lib/fastclick.js',
              'bower_components/modernizr/modernizr.js',
              'bower_components/jquery/dist/jquery.js',
              'bower_components/jquery.cookie/jquery.cookie.js',
              'bower_components/jquery-placeholder/jquery.placeholder.js',
              'bower_components/foundation/js/foundation.js'],
        dest: 'js/foundation.js'
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'concat']);
  grunt.registerTask('default', ['concat', 'build', 'watch']);
};
