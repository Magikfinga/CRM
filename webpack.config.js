const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js', // Update this with your actual main entry file
        another: './src/anotherEntry.js' // Additional entry points can be added here
    },
    output: {
        filename: '[name].bundle.js',  // [name] will be replaced by the entry point names
        path: path.resolve(__dirname, 'dist'),
        clean: true,  // Clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Transpile .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Babel options can go here
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(css|sass|scss)$/, // Process CSS/SASS files
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Image processing
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'D365 Extensions',
            template: './src/index.html', // Template HTML file to use
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve these file extensions
    },
    devtool: 'source-map', // Enable source maps for better debugging
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000, // Port for the dev server
    },
};