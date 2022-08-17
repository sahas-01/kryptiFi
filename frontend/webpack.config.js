import {webpack} from 'webpack';

module.exports = {

    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        
    ],
    resolve: {
        fallback: {
            "buffer": require.resolve("buffer")
        }
    },

}