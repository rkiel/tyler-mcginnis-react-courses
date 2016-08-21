#### Netlify Experiment

    npm init -f
    npm install --save react react-dom
    npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react
    touch webpack.config.js
    touch .babelrc
    echo dist >> .gitignore

    mkdir app && cd app
    touch index.html
    touch index.js

    npm start

    http://192.168.33.60:8080/
