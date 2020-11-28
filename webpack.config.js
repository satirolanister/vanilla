const {VueLoaderPlugin, }=require('vue-loader');
const css = require('css-loader');
module.exports = {
    devServer: {
        liveReload: true
    },
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public/js',
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
                
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ["css-loader"],
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}