// lib to join directories
const path = require('path');

// define plugin as an object
// naming it like a variable
const webpack = require('webpack');

// Extract CSS files into seperated files
// Make sure the style files load first, then JS
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// process.env.NODE_ENV
// if production server does not have this param
// default is development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

// export function
// advantage to access some parameter like: environments
module.exports = (env) => {
    // setup for prod
    const isProduction = env === 'production';
    // Setup to extract css to other files different of bundle.js
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        // entry -> output
        // setup babel-polyfill first for cross-browser running
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            // path is a lib to join directory
            // here we join absolute directory of our app to public folder
            // compress all js to bundle.js file in public/dist folder
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },

        module: {
            // loader - customize behavior of webpack
            // for example: convert ES6 -> ES5, conver JSX -> JS
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                // match css and scss files
                test: /\.s?css$/,
                // style loaders for css and sass
                // sourceMap to help us see the exact file location on dev tools
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },

        plugins: [
            CSSExtract,
            // replace string in project with specific values (for development)
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],

        // devtool: expose js file to chrome devtool view
        // source-map make the bundle.js smaller to load faster
        // inline-source-map is for dev server
        devtool: isProduction ? 'source-map' : 'inline-source-map',

        // create dev server to run test
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            compress: true,
            port: 3001,
            publicPath: '/dist/'
        }
    };
};