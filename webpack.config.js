const path = require( 'path' );
// const webpack = require( 'webpack' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
// const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
// const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
// const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const config = require( './config.json' );

module.exports = {
  entry: './index',
  output: {
    filename: 'bundle.js',
		path: path.resolve( __dirname, 'dist' ),
		publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [
		new BrowserSyncPlugin( {
				proxy: {
					target: config.proxyURL
				},
				files: [
          '**/*.php',
          '**/*.js'
				],
				cors: true,
				reloadDelay: 0
			}
    )/*,
		new ExtractTextPlugin( {
			disable: false,
			filename: 'style.bundle.css',
			allChunks: true
		} ),*/
	],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
			/*{
				test: /\.css$/i,
				use: ExtractTextPlugin.extract( {
					fallback: 'style-loader',
					use: 'css-loader'
				} ),
			},
			{
				test: /\.scss$/i,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract( {
					use: [ 'css-loader', 'sass-loader' ]
				} )
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}*/
    ]
  }
};
