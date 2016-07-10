module.exports = {
    entry: __dirname + "/scripts/main.js",
    devtool: 'inline-source-map',
    output: {
        path: __dirname + "/wwwroot/static",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'angular2']
            }
        }]
    }
}