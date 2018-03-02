var development = process.env.NODE_ENV != "production";
var path = require('path');
var webpack = require('webpack');
    
module.exports = {
    context: path.join(__dirname, "src"),
    devtool: development ? 'source-map' : null,
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				loader: 'babel-loader',

				options: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-decorators-legacy']
				}
			}
        ]
    },
    
};