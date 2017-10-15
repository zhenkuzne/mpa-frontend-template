# MPA frontend template
_Template based on webpack, pug, stylus, es6, postcss for multi page applications_

[![Studio Ratio](https://pbs.twimg.com/profile_images/565814251671912449/n1WpCfuw.png)](https://studioratio.ru/)

## Prepare
1. Install or update [Node.js](https://nodejs.org/en/);
1. Install [Yarn](https://yarnpkg.com/lang/en/) - fast package manager (like a npm), [usage](https://yarnpkg.com/en/docs/usage);
1. Install editorconfig plugin for you editor ([PhpStorm](https://plugins.jetbrains.com/plugin/7294-editorconfig), [Sublime Text](https://packagecontrol.io/packages/EditorConfig), [Atom](https://atom.io/packages/editorconfig), [VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)) - consistent coding style between different editors and IDEs.

## Start
1. Clone or download project;
1. In project folder, run `yarn` for install dependencies;
1. Run for build:
    * `npm run build` - build project for production (includes UglifyJSPlugin, cssnano);
    * `npm run watch` - build and start watching for development (includes sourcemaps);
    * `npm run start` - build, watch and local server for development (includes reload on change files).
    
## Feedback
For questions, bugs and enhancements use [issues](https://github.com/evgen3/mpa-frontend-template/issues).
