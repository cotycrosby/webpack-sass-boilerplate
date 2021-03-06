# Webpack and Sass Boilerplate
I've been working on my frontend skills and I'm tired of setting this up everytime I want to start a new project.

### Getting started. 
Run 
- `npm install` to install the dev dependancies. 
- `npm build` to create the output files **OR** 
- `npm watch` to utilize webpack watch. 

The development mode is set to production so that style isn't injected via javascript. 

### SASS
The main file is the `/src/scss/styles.scss`. If you want to convert to sass, change the file name in `/src/js/styles.js`. The output file is `/build/styles.css`

### Javascript
Any Javascript file inside `/src/js/` will get bundled into `/build/app.js`