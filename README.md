# MPA frontend template
_Template based on webpack, pug, stylus, es6, postcss for multi page applications_

[![Studio Ratio](https://pbs.twimg.com/profile_images/565814251671912449/n1WpCfuw.png)](https://studioratio.ru/)

## Prepare
1. Install or update [Node.js](https://nodejs.org/en/);
1. Install [Yarn](https://yarnpkg.com/lang/en/) - fast package manager (like a npm), [usage](https://yarnpkg.com/en/docs/usage);
1. Install editorconfig plugin for your editor ([PhpStorm](https://plugins.jetbrains.com/plugin/7294-editorconfig), [Sublime Text](https://packagecontrol.io/packages/EditorConfig), [Atom](https://atom.io/packages/linter-eslint), [VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)) - consistent coding style between different editors and IDEs;
1. Install eslint plugin for your editor ([PhpStorm](https://www.jetbrains.com/help/phpstorm/eslint.html), [Sublime Text](https://packagecontrol.io/packages/ESLint), [Atom](https://atom.io/packages/editorconfig), [VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)) - the pluggable linting utility for JavaScript and JSX.

## Start
1. Clone or download project;
1. In project folder, run `yarn` for install dependencies;
1. Run for build:
    * `yarn build` - build project for production (includes UglifyJSPlugin, cssnano);
    * `yarn watch` - build and start watching for development (includes sourcemaps);
    * `yarn start` - build, watch and local server for development (includes reload on change files);
    * `yarn lint` - lint js code in src folder with airbnb rules.

## Cookbook

### Include image in template

In file pug/includes/require.pug located function, usage:

```pug
img(src=`${require('Img/sample.jpg')}` srcset=`${require('Img/sample@2x.jpg')} 2x` alt='')
.block(style=`background-image: url(${require('Img/sample.jpg')});`)
```

For short include in file pug/mixins/img.pug located mixin, usage:
```pug
+img('sample.jpg')(alt='image').some-class
```

Attention! This mixin requires a picture in a double size (for srcset) and the link is already included `~Img/` directory.

## Feedback
For questions, bugs and enhancements use [issues](https://github.com/evgen3/mpa-frontend-template/issues).
