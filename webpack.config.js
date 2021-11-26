const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');

const extensions = ['.js', '.mjs'];
const target = ['web', 'es5'];

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
    ]
};