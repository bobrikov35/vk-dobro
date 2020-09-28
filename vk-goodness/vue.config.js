module.exports = {
  runtimeCompiler: true,
  devServer: {
    port: 10888,
    proxy: {
      '^/projects-data': {
        target: 'https://vk-dobro-1.herokuapp.com/',
        ws: true,
        changeOrigin: true,
      },
      '^/account': {
        target: 'https://vk-dobro-1.herokuapp.com/',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
