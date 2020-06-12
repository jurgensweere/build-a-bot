module.exports = {
    devServer: {
        watchOptions: {
            poll: true,
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                changeOrigin: true,
            },
        },
    },
};
