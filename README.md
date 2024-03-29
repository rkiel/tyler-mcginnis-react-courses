#### React Starter

Clone the repository and make it your own (OS X box)

    mkdir ~/GitHub/rkiel && cd ~/GitHub/rkiel
    git clone git@github.com:rkiel/react-starter.git
    cd react-starter
    rm -rf .git
    git init
    git add .
    git commit -m "Initial commit"

Start up Vagrant (OS X box)

    vagrant up
    vagrant ssh node

Go to the dual-world project directory (Vagrant box)

    cd /vagrant

Install the node modules (Vagrant box)

    npm install

Start the webpack server (Vagrant box)

    npm start

View in the browser (Chrome or Safari)

    http://192.168.33.60:8080/

Here's how it was built (Vagrant box)

    npm init -f

    yarn add react
    yarn add react-dom
    yarn add react-router
    npm install --save axios

    yarn add --dev html-webpack-plugin
    yarn add --dev webpack
    yarn add --dev webpack-dev-server
    yarn add --dev babel-core
    yarn add --dev babel-loader
    yarn add --dev babel-preset-react
    yarn add --dev babel-preset-es2015
    yarn add --dev babel-preset-stage-0
    yarn add --dev css-loader
    yarn add --dev style-loader
    yarn add --dev eslint
    yarn add --dev eslint-config-standard
    yarn add --dev eslint-plugin-standard
    yarn add --dev eslint-plugin-promise
    yarn add --dev eslint-plugin-react
    yarn add --dev babel-eslint
    yarn add --dev babel-preset-react-hmre
    npm install --save-dev extract-text-webpack-plugin

    touch webpack.config.js
    touch .babelrc
    echo dist >> .gitignore

    mkdir app && cd app
    touch index.html
    touch index.js

Here's how to update (Vagrant box)

    npm outdated
    npm update --save
    npm outdated
    npm prune

 Resources

 [JavaScript Standard Style](http://standardjs.com/)

[Tyler McGinnis' React.js Fundamentals](http://www.reactjsprogram.com/)

* [Code for Babel, Webpack, and React](https://github.com/ReactjsProgram/React-Fundamentals/tree/video2)
* [Code for Pure Functions, Props, and Nesting](https://github.com/ReactjsProgram/React-Fundamentals/tree/video3)
* [Code for Children, React Router, Sentry](https://github.com/ReactjsProgram/React-Fundamentals/tree/video4)
* [Code for Container vs. Presentational Components](https://github.com/ReactjsProgram/React-Fundamentals/tree/video5)
* [Code for Lifecycle Events](https://github.com/ReactjsProgram/React-Fundamentals/tree/video6)
* [Code for Axios, Promises, and the Github API](https://github.com/ReactjsProgram/React-Fundamentals/tree/video7)
* [Code for Rendering UI in React](https://github.com/ReactjsProgram/React-Fundamentals/tree/video8)
* [Code for Container vs. Presentational Components](https://github.com/ReactjsProgram/React-Fundamentals/tree/video9)
* [Code for Private Stateless Functional React Components](https://github.com/ReactjsProgram/React-Fundamentals/tree/video10)
* [Code for Building a Highly Reusable React Component](https://github.com/ReactjsProgram/React-Fundamentals/tree/video11)
* [Code for React Router Transitions & Animations](https://github.com/ReactjsProgram/React-Fundamentals/tree/video12)


[Tyler McGinnis' ES6/7 for React](http://www.reactjsprogram.com/)

* [Code for Babel, const, let, modules, destructing in React](https://github.com/ReactjsProgram/ES6-for-React/tree/video1)
* [Code for Concise Object Methods, Arrow Functions](https://github.com/ReactjsProgram/ES6-for-React/tree/video2)
* [Code for Template Strings, Default Parameters, Concise Objects](https://github.com/ReactjsProgram/ES6-for-React/tree/video3)
* [Code for Async/Await in React](https://github.com/ReactjsProgram/ES6-for-React/tree/video4)
* [Code for Classes in React](https://github.com/ReactjsProgram/ES6-for-React/tree/video5)

[Tyler McGinnis' Redux + Immutable](http://www.reactjsprogram.com/)
* [Code for Firebase Schema](https://github.com/ReactjsProgram/Redux-Immutable/tree/1-firebase-schema)
* [Code for Redux Schema](https://github.com/ReactjsProgram/Redux-Immutable/tree/2-redux-schema)
* [Code for Representing Actions with POJOs](https://github.com/ReactjsProgram/Redux-Immutable/tree/3-actions)

[Sentry](https://sentry.io/)
* [Sentry for React](https://docs.sentry.io/clients/javascript/integrations/react/)
