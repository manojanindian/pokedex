var development = process.env.NODE_ENV != "production";
var path = require('path');
var webpack = require('webpack');
    
module.exports = {
    context: path.join(__dirname, "client"),
    devtool: development ? 'source-map' : null,
    entry: './js/app.jsx',
    output: {
        filename: './app.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				loader: 'babel-loader',

				options: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['transform-decorators-legacy']
				}
            },
            {
				test: /\.jsx$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				loader: 'babel-loader',

				options: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['transform-decorators-legacy']
				}
            },
            {
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules'),
                use: ['babel-loader', 'eslint-loader'],
            },
            {
				test: /\.jsx$/,
				exclude: path.resolve(__dirname, 'node_modules'),
                use: ['babel-loader', 'eslint-loader'],
            },
        ]
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        historyApiFallback: true
    },
       
    
};