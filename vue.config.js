module.exports = {
  devServer: {
    /*
    port:8080,
    host:'localhost,
    open:true  //配置浏览器自动访问

    */
    /* overlay: { // 报错遮罩层
      warnings: false,
      errors: false
    } */
    // 反向代理
    /* proxy: {
      '/Service': {
        target: 'https://m.mtime.cn',
        changeOrigin: true
      },
      '/article': {
        target: 'https://content-api-m.mtime.cn',
        changeOrigin: true
      },
      '/api': {
        target: 'https://ticket-m.mtime.cn',
        changeOrigin: true
      },
      '/discovery': {
        target: 'https://ticket-api-m.mtime.cn',
        changeOrigin: true

      } */
    // '/api': {
    //   target: 'http://localhost:3000',
    //   changeOrigin: true

    // }
  }
}
