const path = require('path');
const webpack = require('webpack');


module.exports = {
	mode: 'development',
	entry: './client/index.jsx',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'client')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
							'@babel/preset-env', '@babel/preset-react'
					]
				}
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true
	}
};
