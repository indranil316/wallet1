const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,'build'),
        filename:"app.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'public','index.html')
        }),
        new dotenv(),
        new webpack.ProvidePlugin({
            Buffer:['buffer','Buffer']
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,  
                exclude:/node_modules/,
                use:["babel-loader"]
            }
        ],
    },
    resolve:{
        extensions: ["*", ".js", ".jsx"],
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer")
        }
    },
    devServer:{
        static:{
            directory:path.join(__dirname,'public')
        },
        compress:true,
        port:3000
    }
}