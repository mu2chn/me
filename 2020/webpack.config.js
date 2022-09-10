const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: 'file-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html"
        })
    ]
};
