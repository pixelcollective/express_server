const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = env => {
    const extractSass = new ExtractTextPlugin({
        filename: "[name].css",
        disable: env.NODE_ENV !== "production",
        allChunks: true
    });

    return {
        context: __dirname,
        entry: env.NODE_ENV !== "production" ? [
            'webpack-dev-server/client?http://localhost:8081',
            'webpack/hot/only-dev-server',
            './frontend/site.js'
        ] : [
            './frontend/site.js'
        ],
        devtool: env.NODE_ENV !== "production" ? 'cheap-eval-source-map' : '',
        output: {
            path: path.join(__dirname, 'public'),
            filename: env.NODE_ENV !== "production" ? 'bundle.js' : 'bundle.js',
            publicPath: '/public/'
        },
        devServer: {
            port: 8081,
            hot: true,
            publicPath: '/public/',
            historyApiFallback: true
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json']
        },
        stats: {
            colors: true,
            reasons: true,
            chunks: true
        },
        plugins: env.NODE_ENV !== "production" ? [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            extractSass
        ] : [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            extractSass,
            new MinifyPlugin({}, {sourceMap: false, comments: false}),
            new OptimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {discardComments: {removeAll: true}},
                canPrint: true
            })
        ],
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    exclude: '/node_modules/',
                    use: extractSass.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    sourceMap: env.NODE_ENV !== "production",
                                    importLoaders: 1,
                                }
                            },
                            {
                                loader: "sass-loader",
                                options: {
                                    sourceMap: env.NODE_ENV !== "production",
                                    importLoaders: 1,
                                    data: '@import "base";',
                                    includePaths: [
                                        path.join(__dirname, 'frontend/sass')
                                    ]
                                }
                            },
                            {
                                loader: "postcss-loader",
                                options: {
                                    sourceMap: env.NODE_ENV !== "production",
                                    importLoaders: 1,
                                    plugins: () => [
                                        require('autoprefixer')({
                                            browsers: [
                                                'last 3 versions',
                                                'ie >= 9'
                                            ]
                                        }),
                                    ]
                                }
                            }
                        ]
                    })
                },
                {
                    enforce: 'pre',
                    test: /\.jsx?$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules|bower_compontents)/,
                },
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_compontents)/,
                    loader: 'babel-loader'
                }
            ]
        }
    }
};
