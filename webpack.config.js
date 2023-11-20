﻿const HtmlWebpackPlugin = require('html-webpack-plugin')
const env_config = require('dotenv').config()
const path = require('path')

console.log('config', env_config)

const environment = process.env.NODE_ENV || 'production'
console.log('node process env', process.env.NODE_ENV)

const port = process.env.PORT || 3000

console.log('port', port)
console.log('environment', environment)

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './build/'),
		filename: 'index_bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		open: true,
		port: port,
		host: 'localhost'
	},
	mode: environment,
	plugins: [
		new HtmlWebpackPlugin({template: "./public/index.html"})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				},
			},
			{
				test: /\.(css)$/,
				use: ['css-loader', 'style-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					name: './src/images/[name].[ext]',
				}
			},
			{
				test: /\.(ico)$/i,
				loader: 'file-loader',
				options: {
					name: './src/icons/[name].[ext]',
				}
			},
			{
				test: /\.(docx)$/i,
				loader: 'file-loader',
				options: {
					name: './src/files/[name].[ext]',
				}
			}
		],
	}
}

module.exports = config
