const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');
const { JSDOM } = require("jsdom");

const extensions = ['.js', '.mjs'];
const target = ['node', 'es5'];

/**
 * getStyleDeclaration:: void -> [string]
 */
const getStyleDeclaration = () => Object.keys(Object.getPrototypeOf((new JSDOM()).window.document.body.style));

module.exports = {
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
    },
    stats: 'verbose',
    resolve: {
        extensions,
    },
    target,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        comments: false,
                        minified: true,
                        presets: ["@babel/preset-env"],
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            STYLE_DECLARATIONS: JSON.stringify(getStyleDeclaration()),
        })
    ]
};
