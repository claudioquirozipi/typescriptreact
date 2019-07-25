const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    devServer: {
        open: true,
        hot: true,
        host: 'localhost'
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@app': path.resolve(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'image'
                },
            }
        ]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://ec2-52-39-195-83.us-west-2.compute.amazonaws.com/',
                pathRewrite: { '^/api': '' }
            },
        }
    },
    plugins: [
        new CheckerPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin()
    ]
};
