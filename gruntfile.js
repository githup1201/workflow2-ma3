module.exports = function(grunt) {
  grunt.initConfig({
      
    pkg: grunt.file.readJSON('package.json'), 
    less: {
      dist: {
        files: {
          'dist/css/style.css': 'less/style.less' 
        }
      }
    },
    imagemin: {
           options: {
               optimizationLevel: 3
           },
           files: {
               'dist/image/img.png' : 'src/img.png',
               'dist/image/img.jpg' : 'src/img.jpg',
               'dist/image/img.gif' : 'src/img.gif'
           },    
       
       dynamic: {
           files: [{
               expand: true,
               cwd: 'dist/image/',
               src: ['**/*.{png,jpg,gif}'],
               dest: 'dist/'
               
           }]
       }    
    },  
    browserSync: {
        dev: {
            bsFiles: {
                src: [
                    'dist/',
                    '*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    },
    watch: {
      css: {
        files: ['less/style.less'], 
        tasks: ['less', 'imagemin'],
        options: {
          nospawn: true
        }
      }
    }
  });
    
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['less','imagemin','browserSync','watch']);
}