# vue-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test


feature/router 分支，        主要编写  实现 router hash ＋ 非嵌套     的构件 代码
feature/router-history 分支，主要编写  实现 router history ＋ 非嵌套  的构件 代码
```
plugin-router文件中，
<pre>
<code>Vue.$router = new Router({
      routes: routes,
      mode: 'history'
})</code>
</pre>
```
dev-server文件中，
<pre>
<code>
# handle fallback for HTML5 history API 重写，指向history的写法
app.use(require('connect-history-api-fallback')({
  rewrites: [
    { from: /\.html$/, to: '/index.html' },
    { from: /.*?\.(js)|(css)$/,
      to: (context) => {
        return context.parsedUrl.pathname;
      }
    }
  ]
}))
</code>
</pre>




 
