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
                test: /\.(gif|png|jpe?g|webp)$/i,
                oneOf: [
                    {
                        issuer: /\.[jt]sx?$/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 8192, // Imágenes menores a 8KB se convierten en base64
                                    name: 'images/[name].[hash].[ext]',
                                },
                            },
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
                        type: 'asset/resource',
                        generator: {
                            filename: 'images/[name].[hash][ext]',
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