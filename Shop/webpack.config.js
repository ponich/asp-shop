const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    mode: 'development',
    entry: [
        "./Assets/Scripts/app.js"
    ],
    output: {
        path: path.resolve(__dirname, "./Public"),
        filename: "js/bundle.js"
    },
    resolve: {
        alias: {
            Styles: path.resolve(__dirname, "./Assets/Styles/"),
            Scripts: path.resolve(__dirname, "./Assets/Scripts/"),
            Images: path.resolve(__dirname, "./Assets/Images/"),
        }
    },
    module: {
        rules: []
    },
    plugins: []
};

// babel
config.module.rules.push({
    test: /\.js$/,
    loader: "babel-loader",
    exclude: "/node_modules/",
});

// fonts
config.module.rules.push({
    test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
    loader: 'file-loader',
    options: {
        publicPath: '../',
        name: 'fonts/[name].[ext]',
    }
});

// images
config.module.rules.push({
    test: /\.(png|jpg|gif)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                outputPath: "img/",
                name: '[name].[ext]',
            }
        }
    ]
});

// sass
config.module.rules.push({
    test: /\.(sa|sc|c)ss$/,
    use: [
        MiniCssExtractPlugin.loader,
        //"style-loader",
        "css-loader",
        "sass-loader",
    ],
});

// 
config.plugins.push(
    new MiniCssExtractPlugin({
        filename: "css/bundle.css",
    })
);

module.exports = config;