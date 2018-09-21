// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊
module.exports = {
  // baseUrl  type:{string} default:'/'
  // 将部署应用程序的基本URL
  // 将部署应用程序的基本URL。
  // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
  // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.

  baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',

  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

  // outputDir: 'dist',

  // pages:{ type:Object,Default:undfind }
/*
  构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
  个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
  的字符串，
  注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
*/
  // pages: {
  //   index: {
  //     entry for the page
  //     entry: 'src/index/main.js',
  //     the source template
  //     template: 'public/index.html',
  //     output as dist/index.html
  //     filename: 'index.html'
  //   },
  //   when using the entry-only string format,
  //   template is inferred to be `public/subpage.html`
  //   and falls back to `public/index.html` if not found.
  //   Output filename is inferred to be `subpage.html`.
  //   subpage: 'src/subpage/main.js'
  // },

  // lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项

  devServer: {
    port: 8085, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/api': {
        target: 'https://www.apiopen.top',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    }  // 配置多个代理
  }
}

// ****************   另一篇文章中 vue.config.js 的配置项    *********************
// module.exports = {
//   /** 区分打包环境与开发环境
//    * process.env.NODE_ENV==='production'  (打包环境)
//    * process.env.NODE_ENV==='development' (开发环境)
//    * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
//    */

//   // 项目部署的基础路径

//   // 我们默认假设你的应用将会部署在域名的根部,

//   // 例如 https://www.my-app.com/

//   // 如果你的应用部署在一个子路径下，那么你需要在这里

//   // 指定子路径。比如将你的应用部署在

//   // https://www.foobar.com/my-app/

//   // 那么将这个值改为 '/my-app/'

//   baseUrl: "/", // 构建好的文件输出到哪里

//   outputDir: "dist", // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败

//   lintOnSave: true, // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only

//   runtimeCompiler: false, // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖

//   transpileDependencies: [
//     /* string or regex */
//   ], // 是否为生产环境构建生成sourceMap?

//   productionSourceMap: false, // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md

//   chainWebpack: () => {},

//   configureWebpack: () => {}, // CSS 相关选项

//   css: {
//     // 将组件内部的css提取到一个单独的css文件（只用在生产环境）

//     // 也可以是传递给 extract-text-webpack-plugin 的选项对象

//     extract: true, // 允许生成 CSS source maps?

//     sourceMap: false, // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }

//     loaderOptions: {}, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.

//     modules: false
//   }, // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores

//   parallel: require("os").cpus().length > 1, // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

//   pwa: {}, // configure webpack-dev-server behavior

//   devServer: {
//     open: process.platform === "darwin",

//     disableHostCheck: false,

//     host: "0.0.0.0",

//     port: 8088,

//     https: false,

//     hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy

//     proxy: null // string | Object

//     // before: app => {}
//   }, // 第三方插件配置

//   pluginOptions: {
//     // ...
//   }
// };
