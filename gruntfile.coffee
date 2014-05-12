module.exports = (grunt) ->

  # Get all grunt modules
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  # Project configuration.
  grunt.initConfig

    # Collect data about the project
    pkg: grunt.file.readJSON('package.json')
    paths: grunt.file.readJSON('paths.json')

    # Set Banner for some generated files
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'

    # coffee
    coffee:
      all:
        files: [
          expand: true
          cwd: '<%= paths.src.coffee %>'
          src: ['*.coffee']
          dest: '<%= paths.src.js %>'
          ext: '.js'
        ]

    # eslint
    eslint:
      options:
        config: 'eslint.json'
      all: ['<%= paths.src.js %>*.js']

    # uglify
    uglify:
      options:
        banner: '<%= banner %>'
      all:
        files: [
          expand: true
          cwd: '<%= paths.src.js %>'
          src: ['*.js']
          dest: '<%= paths.build.js %>'
          ext: '.min.js'
        ]

    # watch
    watch:
      # watch coffee
      coffee:
        files: ['<%= paths.src.coffee %>*.coffee']
        tasks: ['coffee', 'eslint', 'uglify']
        options:
          livereload: true

  # Default task(s).
  grunt.registerTask('default', ['watch'])
