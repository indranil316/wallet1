const path = require('path');

module.exports={
    mode:"development",
    entry:"./src/App.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"app.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer:{
        static:{
            directory:path.join(__dirname,'dist')
        },
        compress:true,
        port:3000
    }
}