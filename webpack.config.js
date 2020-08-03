const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

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
                test: /\.scss$/,
                use:["style-loader", "css-loader", "sass-loader"]
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                }
            },
            
            {
                test:/\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader:'image-webpack-loader',
                        options: {
                            gifscile: {
                                interlanced: false
                            },
                            optipng: {
                                optimizationLevel: 7
                            },
                            pngquant: {
                                quality: "65-90",
                                speed: 4
                            },
                            mozjpeg: {
                                progressive:true,
                                quality:65
                            }
                        }
                    }
                ]
            }
        ]
    },
    
    plugins: [
        new HtmlWebPackPlugin(
            {
                inject:true,
                template:'./public/index.html',
                filename:'./index.html'   
            }
        )
    ]
}