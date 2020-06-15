export default {
  mode: 'universal',

  resourceHints: false,
  
  router: {
    middleware: [
      'check-auth',
      'i18n'
    ],
    router: {
	    base: './',
    },
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
    },
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '星际荣威科技有限公司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '星际荣威科技有限公司' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/LOGO-webBCG.png' }
    ]
  },

  modules: [
    '@nuxtjs/axios', 
  ],
  axios: {
    prefix: 'http://192.168.0.164:9090/api/',        
    proxy: true,  
  },
  proxy: {
    '/api/': { 
      target: 'https://xingjirw.com', 
      pathRewrite: {'^/api/': ''} 
    }
  },

  env: {
    // baseURL: '//192.168.0.164:9090/api/', // 本机开发使用
    // baseURL: '//118.24.168.230:8090/api/', // 生产  
    // imgserverhost: 'http://118.24.168.230:8090/static', 
    baseURL: 'https://xingjirw.com/api/', // 生产  
    imgserverhost: 'https://xingjirw.com/static', 
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './static/font/common.css',
    './static/font/iconfont/iconfont.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js',
    { src: '~plugins/video.js', ssr: true },
    { src: '~plugins/element-ui', ssr: true },
    '~/plugins/axios',
    { src: "./static/font/iconfont/iconfont.js", ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        [ "component", {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk" }] 
      ] 
    }, 

    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },

    // publicPath: '/_nuxt/',
    /*
    ** You can extend webpack config here
    */
    // extend (config, ctx) {
    // }
  },

  // generate: {
  //   fallback: true,
  //   subFolders: false
  // }
};
