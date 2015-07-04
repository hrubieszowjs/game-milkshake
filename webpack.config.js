module.exports = {
    entry: '',
    output: {
        filename: ''
    },
    module: {
            loaders: [
                { test: /\.es6.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            ]
    },
    devtool: '#cheap-module-source-map'
};
