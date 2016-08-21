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
    npm install --save react react-dom
    npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react
    touch webpack.config.js
    touch .babelrc
    echo dist >> .gitignore

    mkdir app && cd app
    touch index.html
    touch index.js
