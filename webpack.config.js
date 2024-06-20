const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jep?g)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        issuer: /\.[jt]sx?$/,
                        use: [
                            {
                                loader: '@svgr/webpack',
                                options: {
                                    icon: true,
                                },
                            },
                            'file-loader',
                        ],
                    },
                    {
                        type: 'asset/resource',
                        generator: {
                            filename: 'images/[name].[hash][ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    // devtool: "eval-cheap-module-source-map",
    devtool: "eval-cheap-module-source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        compress: true,
        port: 3000,
        open: true,
    },
};