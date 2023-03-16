const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = merge(commonConfig, {
	mode: 'production',
	devtool: false,
	plugins: [
		new CleanWebpackPlugin(),
		new BrotliPlugin({
			asset: '[path].br[query]',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8,
		}),
	],
	optimization: {
		runtimeChunk:'single',
		splitChunks: {
			chunks: 'all',
		},
		minimize: true,
		minimizer: [
			new TerserPlugin({
				// Use multi-process parallel running to improve the build speed
				// Default number of concurrent runs: os.cpus().length - 1
				parallel: true,
			}),
			new CssMinimizerPlugin(),
		],
	},
	performance: {
		hints: false,
	},
})