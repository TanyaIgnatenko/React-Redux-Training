const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;

const publicFolder = path.resolve(__dirname, 'public');
const srcFolder = path.resolve(__dirname, 'src');

const defaultStyleLoaders = [
    {
        loader: 'postcss-loader',
        options: {
            plugins: [
                autoprefixer({
                    browsers: ['Safari >= 9', 'last 2 versions']
                })
            ]
        }
    },
    'sass-loader'
];

const config = {
    mode: NODE_ENV,

    devtool: NODE_ENV !== 'production' ? 'source-map' : false,

    entry: [
        path.resolve(srcFolder, 'index.js')
    ],

    output: {
        publicPath: '/',
        path: publicFolder,
        filename: NODE_ENV !== 'production' ? '[hash].bundle.js' : '[hash].bundle.min.js'
    },

    resolve: {
        modules: [srcFolder, 'node_modules'],
        extensions: ['.js', '.scss']
    },

    devServer: {
        port: 3001,
        contentBase: publicFolder,
        historyApiFallback: true,
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [srcFolder],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                'env',
                                {
                                    targets: {
                                        browsers: ['last 2 versions']
                                    },
                                    modules: false
                                }
                            ],
                            'react'
                        ],
                        plugins: [
                            'react-hot-loader/babel',
                            'transform-object-rest-spread',
                            'transform-class-properties'
                        ]
                    }
                }
            },

            {
                test: /\.(png)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },

            {
                test: /\.scss$/,
                include: [path.resolve(srcFolder, 'components')],
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: NODE_ENV === 'production',
                                modules: true,
                                importLoaders: 2,
                                localIdentName: '[local]'
                            }
                        },
                        ...defaultStyleLoaders
                    ]
                })
            },

            {
                test: /\.scss$/,
                exclude: [path.resolve(srcFolder, 'components')],
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: NODE_ENV === 'production'
                            }
                        },
                        ...defaultStyleLoaders
                    ]
                })
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(srcFolder, 'index.html')
        }),

        new CleanWebpackPlugin(publicFolder, {
            root: __dirname,
            verbose: true
        }),

        new ExtractTextPlugin({
            filename: NODE_ENV !== 'production' ? '[hash].styles.css' : '[hash].style.min.css',
            allChunks: true
        }),

        new webpack.HotModuleReplacementPlugin()
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_console: true,
                        unused: true,
                        dead_code: true
                    },
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
};

module.exports = config;
