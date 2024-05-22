const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src", "index.ts"),
    experiments: {
        outputModule: true,
    },
    output: {
        path: path.resolve(__dirname, '_bundles'),
        filename: '[name].js',
        library: {
            type: 'module'
        },
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devtool: 'source-map',
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
        ],
    },
}