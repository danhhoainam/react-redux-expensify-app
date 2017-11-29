const path = require('path');

module.exports = {
    // entry -> output
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: {
        // loader - customize behavior of webpack
        // for example: convert ES6 -> ES5, conver JSX -> JS
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },

    // devtool: expose js file to chrome devtool view
    devtool: 'cheap-module-eval-source-map',

    // create dev server to run test
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        compress: true,
        port: 9000
    }
};