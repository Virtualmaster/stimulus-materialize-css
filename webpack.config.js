const path = require('path');

module.exports = {
    target: 'web',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'stimulus-materialize-css.js',
        library: 'stimulusMaterialize',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        stimulus: {
            commonjs: 'stimulus',
            commonjs2: 'stimulus',
            amd: 'stimulus',
            root: 'stimulus'
        }
    },
    mode: 'production'
}