const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
        
    module: {
        rules:[
            {
                test: /\.css$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },

            {
                test: /\.scss$/,
                use:[MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                }
            },
        ]
    },
    
    plugins: [
        new HtmlWebPackPlugin(
            {
                inject:true,
                template:'./public/index.html',
                filename:'./index.html',
                hash:true,
            }
        ),
        new HtmlWebPackPlugin(
            {   
                template:'./public/loading.html',
                filename:'./loading.html',
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: 'style.css'
            }
        ),
    ]
}