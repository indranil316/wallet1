const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,'build'),
        filename:"app.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'public','index.html')
        })
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
    },
    devServer:{
        static:{
            directory:path.join(__dirname,'build')
        },
        compress:true,
        port:3000
    }
}