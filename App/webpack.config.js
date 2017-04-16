module.exports = {
    entry: ['./build/app/index.js'],
    output: {
        path: __dirname + "./build",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,   //catches every js file iwthoin our project
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
         port: 3000,
         contentBase: './build',
         inline: true
    }
}