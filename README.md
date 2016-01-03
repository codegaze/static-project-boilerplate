### Static Project Boilerplate with GULP

This is a basic static website HTML5 boilerplate with Gulp intergration to automate some stuff like

* SASS compile/minification
* JS concatenation/minification

This is my basic workflow for a project start.

This repository creates a basic directory structure with a ```src``` and an ```assets``` folder for the concatenated/compiled/minified files. Your working folder will be the `src`.
Has a prestructured sass folder with a _reset.scss partial to get you started and a simple js folder with a `console.log();`.
All files in the js folder will be concatenated and minified.
Has also the [html5shiv](https://github.com/afarkas/html5shiv)(HTML5 elements for older browsers) and [respond.js](https://github.com/scottjehl/Respond)(media queries polyfill) libraries.

Your index.html is your main file that includes all the static assets.

```
  |-- index.html
  |-- assets
  |   |-- css
  |   |   |-- style.css
  |   |-- img
  |   |-- js
  |       |-- scripts.js
  |       |-- vendor
  |           |-- html5shiv.min.js
  |           |-- respond.min.js
  |-- src
      |-- js
      |   |-- script.js
      |-- sass
          |-- style.scss
          |-- partials
              |-- _reset.scss
```

### Installation

```npm install```

### Usage

Just type ```gulp``` and Gulp will watch your files for changes.
