var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var autoprefixerOptions = {
    browsers: [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
    ]
};

module.exports = {
    entry: {
        main: './src/main.js'
        //vendors: ['react','jquery']
    },
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },

    module: {
        loaders: [
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif)$/, 
                loader: 'url-loader?limit=819200'
            },
            {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel'
            },
            {   test: /\.css$/, 
                loader: 'style-loader!css-loader?sourceMap' 
            },
            {   
                test: /\.scss$/, 
                loader: "style!css!sass?sourceMap"
            },
            // {
            //     test: /\.less$/,
            //     loader: 'style-loader!css-loader!postcss-loader!less-loader'
            // },
            { 
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    // example: if you wish to apply custom babel options
    // instead of using vue-loader's default:
    babel: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-runtime', ["antd",  { "style": "css" }]]
    },
    postcss: function () {
        return [autoprefixer(autoprefixerOptions)];
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.HotModuleReplacementPlugin()

    ]
}

if (process.env.NODE_ENV !== 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}