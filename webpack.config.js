const HtmlWebpackPlugin = require('html-webpack-plugin')
const env_config = require('dotenv').config()
const path = require('path')
const webpack = require('webpack')

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
		rules: [{
			test: /\.(gif|png|jpe?g|svg)$/i,
			use: [
				'file-loader',
				{
					loader: 'image-webpack-loader',
					options: {
						bypassOnDebug: true, // webpack@1.x
						disable: true, // webpack@2.x and newer
					},
				},
				]},
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
			]
	}
}

module.exports = config
