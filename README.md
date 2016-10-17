#### React Starter

Clone the repository and make it your own

    mkdir ~/GitHub/rkiel && cd ~/GitHub/rkiel
    git clone git@github.com:rkiel/react-starter.git
    cd react-starter
    rm -rf .git
    git init
    git add .
    git commit -m "Initial commit"

Install the node modules

    npm install

Start the webpack server

    npm start

View in the browser

    http://192.168.33.60:8080/

Here's how it was built

    npm init -f
    npm install --save react react-dom react-router axios
    npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react
    touch webpack.config.js
    touch .babelrc
    echo dist >> .gitignore

    mkdir app && cd app
    touch index.html
    touch index.js

Here's how to update

    npm outdated
    npm update --save
    npm outdated
    npm prune
 
 [Tyler McGinnis' React.js Fundamentals](http://www.reactjsprogram.com/)
 
* [Code for Video 2 - Babel, Webpack, and React](https://github.com/ReactjsProgram/React-Fundamentals/tree/video2)
* [Code for Video 3 - Pure Functions, Props, and Nesting](https://github.com/ReactjsProgram/React-Fundamentals/tree/video3)
* [Code for Video 4 - Children, React Router, Sentry](https://github.com/ReactjsProgram/React-Fundamentals/tree/video4)
* [Code for Video 5 - Container vs. Presentational Components](https://github.com/ReactjsProgram/React-Fundamentals/tree/video5)
* [Code for Video 6 - Lifecycle Events](https://github.com/ReactjsProgram/React-Fundamentals/tree/video6)

Other Tools

* [Sentry](https://sentry.io/)
* [Sentry for React](https://docs.sentry.io/clients/javascript/integrations/react/)
