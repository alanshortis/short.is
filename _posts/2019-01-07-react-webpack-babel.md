--- 
layout: post
title: "Configuring Webpack, Babel and React"
date: 2019-01-07 00:00:00 +0000
categories: development
github_url: "https://github.com/alanshortis/short.is"
--- 

<ol class="contents">
  <li><a href="#assume">Assumptions</a></li>
  <li><a href="#create">Create the project</a></li>
  <li><a href="#babel">Babel</a></li>
  <li><a href="#webpack">Webpack</a></li>
  <li><a href="#react">React</a></li>
  <li><a href="#dev">Development Server</a></li>
  <li><a href="#styled">Styled Components</a></li>
  <li><a href="#code">Code Quality</a></li>
  <li><a href="#prod">Production Build</a></li>
</ol>

There are various ways to write a React app without the need to deal with tooling and configuration. [Create React App](https://github.com/facebook/create-react-app), [Next.js](https://nextjs.org/) and [Gatsby](https://www.gatsbyjs.org/) are all excellent and can be used to make a complete, finished app (depending on your needs).

This guide will explain how to configure a React application from scratch. You may need to do this to meet the needs of your project, or you might just be curious to learn how your React source ends up in a format that can be understood by browsers.


<h3 id="assume">Assumptions</h3>

This guide assumes a few things that will not be covered:

* You have Node.js and NPM installed. At the time of writing, the latest versions are `11.6.0` and `6.5.0` respectively.
* You know enough JavaScript and React to get by. We won't be touching React much, but what little we do write will not be explained.
* You're comfortable enough on the command line to navigate the file system and run commands.

<h3 id="create">Create project</h3>

Create a new folder for your project, and move to it: `$ mkdir react-project && cd react-project`.

>TIP: If you using oh-my-zsh, you can create a move to a folder in one command: `$ take react-project`

We'll be using NPM to handle all of our dependencies, so we need to initialise it and create a `package.json`. Run `$ npm init -y` (the `-y` here will accept all default values for each property, which is fine to get started).

If you're going to be using git, now is a good time to ignore some files. Run `$ touch .gitignore` to create the file, open it in your favourite editor and add a few entires:

{% highlight javascript %}node_modules
npm-debug.log
dist
{% endhighlight %} 

>TIP: If you're using Visual Studio Code, you can open files directly from the command line: `$ code .gitignore`.

<h3 id="babel">Babel</h3>

Babel is a toolchain that will take your modern JavaScript source and transpile it down to a version that can be understood by browsers. For example, IE11 cannot work with JavaScript classes, so Babel will turn them back in to plain old Prototypes. When IE11 finally goes away, Babel will stop turning classes into prototypes when you rebuild.

The [Babel documentation](https://babeljs.io/docs/en/) is very good and explains everything in much more detail.

Install Babel, presets to handle modern JavaScript and React, and a Babel loader (this is for Webpack, which will be explained later): `$ npm i --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader`

The Babel presets add support for transpiling particular parts of JavaScript. [preset-env](https://babeljs.io/docs/en/babel-preset-env) will take care of modern (think ES6 and beyond) features and [preset-react](https://babeljs.io/docs/en/babel-preset-react) will take care of features specific to React (such as JSX).

Note that at this point that each of these dependencies have been installed into the `node_modules` folder, which we are ignoring with git, and are listed as `devDependencies` in package.json.

Create a config file for Babel: `$ touch .babelrc`, open it, and add the presets we just downloaded:

{% highlight json %}{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
{% endhighlight %} 

<h3 id="webpack">Webpack</h3>

At its heart, Webpack is a module bundler. It takes all the pieces of JavaScript we're using and puts them together into a bundle that can be used by the browser.

Part of the process of creating bundles is running Babel, but it can automate many other tasks too. In this case, Webpack will:

* Take our JavaScript modules (React, our own components, etc), transpile them with Babel and save them all in a new bundle.
* Copy files between our source and destination folders at build time.
* Start a development server that will automatically refresh as we work.
* Create an optimised build ready for production.

Install Webpack and the Webpack CLI as dev dependencies: `$ npm i --save-dev webpack webpack-cli`.

Create a new webpack config: `$ touch webpack.config.js`, open it, and add the below configuration to get started:

{% highlight javascript %}module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
{% endhighlight %} 

With this configuration, running Webpack will look for all files with a .js or .jsx extension (excluding those that have been installed from npm) and run the `babel-loader` against them. The end result will be a JavaScript bundle comprised of each of our modules, transpiled down to a version of JavaScript that can be understood by our target browsers.

To define what browsers we want to support, add a new property in `package.json` whose value describes the target:

{% highlight javascript %}"browserslist": ["last 2 versions"]
{% endhighlight %}

Webpack uses [browserslist](https://github.com/browserslist/browserslist) for this, and details on how to specify the browsers you're interested in can be found in their documentation. For now, the last 2 versions of each browser will do. Internet Explorer and Edge are considered separate, so this config would include IE10 which you're not likely to need unless you're very unlucky.

React needs at least one HTML file to work, with a element we can render to. Webpack can help us with that too.

Install the html loader and the html webpack plugin: `$ npm i --save-dev html-webpack-plugin html-loader`.

Create a new folder for our source files at the root of the project: `$ mkdir src`. In the source folder, create a new HTML file: `$ cd src && touch index.html`. Add the below markup to this new HTML file, noting the div with an ID of `root`.

{% highlight html %}<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
{% endhighlight %}

>TIP: If you're using emmet (which is included with Visual Studio Code), you can create this very quickly using: `html:5>#root`.

Add to your webpack config to use the HTML loader:

{% highlight javascript %}const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
{% endhighlight %}

Similar to before, when running Webpack it will look for any HTML files and run the relevant loader. We're also configuring the `HtmlWebPackPlugin` to take the html file we created in our source folder and copy it to the output directory (which defaults to `dist`).


<h3 id="react">React</h3>

Now we have some tooling taken care of, we can install React and create the most basic App.

Install React and ReactDOM as dependencies: `$ npm i --save react react-dom`.

Note that these will be listed under `dependencies` in package.json. This is because these dependencies are used in the application itself rather than just for development/tooling.

In the src folder, create a new JavaScript file for our React App: `$ touch index.js`.

{% highlight jsx %}import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <span>This is my React app.</span>
);

render(<App />, document.getElementById('root'));
{% endhighlight %} 

That's it for now - we're just directly rendering one stateless functional component to the div with an ID of 'root' that we added to our HTML file earlier.


<h3 id="dev">Development Server</h3>

We've yet to see anything in a browser yet. In order to do that, and to have a smooth environment for development, we're going to configure Webpack to use [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/) and [Browsersync](https://www.browsersync.io/) together. 

The Webpack Dev Server is very quick and easy to set up, and provides excellent features such as [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/). Browsersync allows you to use multiple browsers and devices at the same time, with scrolling and clicking synced everywhere.

Install the Webpack Development Server and Browsersync: `$ npm i --save-dev webpack-dev-server browser-sync browser-sync-webpack-plugin`, and add the configuration to `webpack.config.js`.

{% highlight javascript %}const HtmlWebPackPlugin = require("html-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    },
    {
      reload: false
    })
  ]
};
{% endhighlight %} 

This config is:
* Telling Browsersync to run on port 3000 on localhost.
* Telling BS to proxy port 8080, which is where WDS is running. By doing this, we get the features of both tools at the minor expense of using two ports on localhost.
* Setting `reload` to false stops Browsersync from reloading as we save - WDS has that covered.

In `package.json`, we can create a new script entry for starting this development server (you can remove the `test` script already defined):

{% highlight json %} 
"scripts": {
  "start": "webpack-dev-server --mode development --port 8080 --hot"
},
{% endhighlight %} 

Running `$ npm start` will fire up the dev server, open your browser on the correct url and port, set development [mode](https://webpack.js.org/concepts/mode/), ensure WDS runs on port 8080, and enables hot reloading. You'll also be given some additional URLs in your terminal:

{% highlight html %}--------------------------------------
      Local: http://localhost:3000
  External: http://10.216.69.213:3000
--------------------------------------
        UI: http://localhost:3001
UI External: http://localhost:3001
--------------------------------------
{% endhighlight %} 

The External URL can be used by any device on the same network to view your Dev Server. The UI URL is a dashboard for Browsersync where you can adjust some settings.

Visiting [http://localhost:3000](http://localhost:3000) will display your amazing React App.

>Tip: React Developer Tools is an essential extension available for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/) that makes debugging React much easier, as well as looking under the hood of third party apps built in React.


<h3 id="styled">Styled Components</h3>

Styled Components is a really nice way of handling CSS for React. While it is a CSS-in-JS solution, it doesn't involve any inline CSS. It's not dissimilar to SASS, in that you can use mixins, functions and variables all of which can be written in regular JavaScript. The real power comes from the possibility of keeping all logic, markup and styling entirely self contained within a component.

Install styled components as a  dependency: `$ npm i --save styled-components`.

There is also a Babel plugin that provides better debugging: `$ npm i --save-dev babel-plugin-styled-components`. Add this plugin to `.babelrc`:

{% highlight json %}{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["babel-plugin-styled-components"]
}
{% endhighlight %} 

We can now using Styled Components in our React Component:

{% highlight jsx %}import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const StyledText = styled.span`
  color: red;
`;

const App = () => (
  <StyledText>This is my React app.</StyledText>
);

render(<App />, document.getElementById('root'));
{% endhighlight %} 


<h3 id="code">Code Quality</h3>

#### Prettier and ESLint

[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are tools that help ensure that your code adheres to standards and is correctly formatted. There is a little bit of overlap in what these tools do, so by configuring them together we can get the benefits of both.

We're going to use the popular [Airbnb ESLint config](https://www.npmjs.com/package/eslint-config-airbnb) to set some sensible defaults, including a config and plugin that takes prettier into account.

The Airbnb config expects various peer dependencies, and these can all be installed together: `$ npx install-peerdeps --dev eslint-config-airbnb`.

We also need to install the babel parser for ESLint, Prettier and the Prettier configs and plugins so it'll work nicely with ESLint: `$ npm i --save-dev babel-eslint prettier eslint-config-prettier eslint-plugin-prettier`.

Create a `.eslintrc` config file, extending each config,using the prettier plugin and using the babel-eslint parser:

{% highlight json %}{
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["prettier"],
  "globals": {
    "document": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
  "parser": "babel-eslint"
}
{% endhighlight %} 

We're adjusting the Airbnb rules here slightly. The rules state that all files that contain JSX must use a `.jsx` file extension. Some people prefer to just use a `.js` extension, and this rule will allow either.

To use `.jsx` files, we'll need to add a property to our webpack config that will ensure JSX files are resolved:

{% highlight javascript %}resolve: {
  extensions: ['.js', '.jsx'],
},
{% endhighlight %} 

With this added, you could go back and rename `src/index.js` to `src/index.jsx` if you prefer.

Create a `.prettierrc` config with some personal preferences. The default config for Prettier is really sensible and well thought out, so if you like it you only need to include an empty object.

{% highlight json %}{
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100
}
{% endhighlight %} 

There are a few rules I like to override:

* Set quotes to single, as the default is double.
* Ensure trailing commas are used. I like this for source control, as it means a line won't appear to have been authored by a developer who only added a comma at the end.
* Set a longer line length.


#### Stylelint

Like ESLint for JavaScript, [stylelint](https://stylelint.io/) enforces rules for CSS. Install stylelint, a processor for styled components (so we can use this with Styled Components rather than just regular CSS or SASS) and the recommended/styled components configs: `$ npm i --save-dev stylelint stylelint-processor-styled-components stylelint-config-styled-components stylelint-config-recommended`.

Create a .stylelintrc with this config, which extends the configs we just downloaded. I have also added some rules I like, but you should take the time to read the [available rules](https://stylelint.io/user-guide/rules/) as I find the recommended rules a bit too lenient.

{% highlight json %}{
  "processors": [
    "stylelint-processor-styled-components"
  ],
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ],
  "rules": {
    "block-closing-brace-newline-after": "always",
    "declaration-block-trailing-semicolon": "always",
    "declaration-no-important": true,
    "declaration-colon-space-after": "always",
    "color-named": "never",
    "selector-max-id": 0,
    "selector-max-universal": 0,
    "number-leading-zero": "never",
    "number-no-trailing-zeros": true,
    "length-zero-no-unit": true,
    "unit-case": "lower",
  }
}
{% endhighlight %} 

If using Visual Studio Code, the Prettier, ESLint and stylelint plugins will add features to the editor. Issues will be underlined in code, and Prettier rules will be applied on save so you never need to think about things like indentation.

To enable the format on save feature, add to your VS Code settings.json:

{% highlight json %}"editor.formatOnSave": true,
"prettier.requireConfig": true,
{% endhighlight %} 

The `prettier.requireConfig` setting will prevent VS Code from applying prettier formats on save in projects that do not have a prettier config. This is especially useful if you're in an older codebase with established formatting that deviates from Prettier, otherwise you're going to have a huge amount of formatting changes to get through your source control.


#### Linting

We now have linting rules for both JavaScript and CSS, so we should add methods to use them. First of all, we'll create scripts to run just the linters (which could be helpful for CI/CD workflows).

Add scripts to package.json:

{% highlight json %}"scripts": {
  "start": "webpack-dev-server --mode development --port 8080 --hot",
  "lint:js": "eslint  --ext .js --ext .jsx src",
  "lint:css": "stylelint  src/**/*.js src/**/*.jsx"
}
{% endhighlight %} 

Each of these scripts will look inside our source folder and all folder contained within, and check that the linting rules pass for all js and jsx files.

When running the CSS linter, you'll notice it flags an issue. We have used the `red` colour keyword in our Styled Component which our rules forbid. To solve this, go back to `src/index.js` and set the colour in hex:

{% highlight jsx %}import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const StyledText = styled.span`
  color: #ff0000;
`;

const App = () => (
  <StyledText>This is my React app.</StyledText>
);

render(<App />, document.getElementById('root'));
{% endhighlight %} 

Rerunning the linter should now show no output at all, as all rules have been adhered to.


#### Linting on save with Webpack

Webpack can be configured to run the linters as we work, as part of our existing development server configuration.

First, we need eslint and stylelint loaders: `$ npm i --save-dev eslint-loader stylelint-custom-processor-loader`, and add to our existing rule for js/jsx files:

{% highlight javascript %}const HtmlWebPackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader', 'stylelint-custom-processor-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/',
      },
      {
        reload: false,
      }
    ),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
{% endhighlight %} 

This extends the existing rule for js and jsx files, and adds the ESLint and stylelint loaders. The order of the loaders in the `use` array is important - we need to lint our source files before Babel touches them, so ensure each linting loader is _after_ the Babel loader in the array.


<h3 id="prod">Production Build</h3>

Webpack can handle a production ready build for us, creating an uglified JavaScript bundle free of code used only for development/debugging. This is achieved using the `mode` parameter we already used for our development server.

Add a new `build` script to package.json

{% highlight json %}"scripts": {
  "start": "webpack-dev-server --mode development --port 8080 --hot",
  "lint:js": "eslint  --ext .js --ext .jsx src",
  "lint:css": "stylelint  src/**/*.js src/**/*.jsx",
  "build": "webpack --mode production --progress"
}
{% endhighlight %} 

The `--progress` option here will print the build progress to the console when run. It's not essential, it just provides a little more information which can be helpful if your build is large.

Running `npm run build` will create a new `dist` folder containing our bundles, and will copy the HTML file we created earlier.

We can add some optimisation to the bundle in our Webpack config. Here, we're going to strip all comments which the built in build doesn't do. Install the uglify JS plugin as a dev dependency: `$ npm i --save-dev uglifyjs-webpack-plugin`, and add to our Webpack config.

This will be our final Webpack config.

{% highlight javascript %}const HtmlWebPackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader', 'stylelint-custom-processor-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/',
      },
      {
        reload: false,
      }
    ),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
{% endhighlight %} 

We should now have a marginally smaller bundle. Not by much, but it all helps.


<h3 id="rr">Using React Router</h3>

We're not going to go over using React Router, but to potentially save you some time there is a little additional config we can add to ensure it works properly when/if you need it.

You'll quickly discover that you get an error when using any route other than `/`. This is because at the point of requesting the your page (e.g. `/about`) React Router has not been loaded, so the server does its best to fulfil the request by looking for something at that route, comes up short and throws a 404.

Adding the below to our webpack config will ensure the dev server will fallback to `index.html` on all routes. Once loaded, React Router will pick up the route from the URL and show the expected page.

{% highlight javascript %}devServer: {
  historyApiFallback: true,
},
{% endhighlight %} 

This just covers the development server; you'll need to consider this when you deploy your code.

<h3 id="conclusion">Conclusion</h3>

This should be a good start for understanding how the tooling works, but is the tip of the iceberg for Webpack configuration for React. As you build a large and complex application you'll likely need to refine this config by adding more Babel plugins to handle emerging JavaScript features, add loaders for different file types and strengthen linter rules to suit your team.
