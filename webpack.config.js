const path = require('path');
const dtsBundle = require('dts-bundle-webpack');
const __root = path.resolve(__dirname);

module.exports = {
    mode: 'production',
    context: __root,
    entry: './src/index.ts',
    // target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'lib/index.js',
        path: __root,
        libraryTarget: 'this',
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new dtsBundle({
            name: '@inpassor/functions',
            main: __root + '/src/index.d.ts',
            out: __root + '/lib/index.d.ts',
        }),
    ],
};
