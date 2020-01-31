// const goods = require('./data/goods.json');
// const ratings = require('./data/ratings.json');
// const seller = require('./data/seller.json');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath:'', //根路径
  outputDir:"dist", //构建输出目录
  assetsDir:"assets", //静态资源目录　（js, css, img, fonts）
  lintOnSave:false, //是否开启estlint保存检查

  devServer:{
    open: true,
    proxy:{
      //　配置跨域
      '/':{
        target:'http://47.100.89.30/api',
        ws:true,
        changeOrigin: true,
        // pathRewrite:{
        //   '^/api':''
        // }
      }
    },
    // //自己创建接口，用来mock数据的
    // before(app){
    //   // http://localhost:8081/api/goods
    //   app.get('/api/goods', function(req, res) {
    //     res.json(goods)
    //   });

    //   app.get('/api/ratings', function(req, res) {
    //     res.json(ratings);
    //   });

    //   app.get('/api/seller', function(req, res) {
    //     res.json(seller);
    //   });

    // }
  }

}