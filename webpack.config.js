// lib to join directories
const path = require('path');
// Extract CSS files into seperated files
// Make sure the style files load first, then JS
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// export function
// advantage to access some parameter like: environments
module.exports = (env) => {
    // setup for prod
    const isProduction = env === 'production';
    // Setup to extract css to other files different of bundle.js
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        // entry -> output
        entry: './src/app.js',
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
            CSSExtract
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