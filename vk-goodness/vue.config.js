module.exports = {
  runtimeCompiler: true,
  devServer: {
    port: 10888,
    proxy: {
      '^/projects-data': {
        target: 'http://localhost:3005',
        ws: true,
        changeOrigin: true,
      },
      '^/account': {
        target: 'http://localhost:3005',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
