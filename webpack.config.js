const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
// const sass = require('sass');

module.exports = (env) => {
    return {
        entry: './src/scripts/index',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        // 'css-loader',
                        {
                            loader: "css-loader",
                            options: {
                                url: false, //permette di caricare le immagini css da percorso assoluto
                            },
                        },
                        'sass-loader'
                    ]
                }
            ]
        },
        resolve: {
            modules: ['node_modules'],
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        plugins: [
            new webpack.ProvidePlugin({
                //   Popper: ['popper.js', 'default']
            }),
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            }),
            new webpack.DefinePlugin({
                ENV: JSON.stringify({
                    VERSION: env.VERSION,
                })
            })
        ]
    }
}
