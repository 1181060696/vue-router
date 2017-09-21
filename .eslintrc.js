module.exports = {
  extends: 'standard',
  //eslint找当前配置文件不能往父级查找
  root: true,
  //指定eslint解析器，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装，使其与ESLint解析
  parser: 'babel-eslint',
  //指定javascript语言类型和风格，sourceType用来指定js引入的方式，默认是script，此处设置为module，指某块导入方式
  parserOptions: {
    sourceType: 'module'
  },
  //指定环境的全局变量，即指定js代码在哪个运行环境中检测（每个运行环境都有一组预定义的全局变量），下面的配置指定了浏览器环境
  env: {
    browser: true,
  },
  //required to lint *.vue files
  //提供插件，插件名称省略了eslint-plugin-，这个配置是用来规范html的
  plugins: [
    'html'
  ],
  "rules": {
     //禁止使用console
     "no-console": 2,
     //函数内最多有几个声明
     "max-statements": [2, 50],
     //嵌套块深度
     "max-depth": [2, 5],
     //回调嵌套深度
     "max-nested-callbacks": [2, 3],
     //函数最多只有5个参数
     "max-params": [2, 5],
     //循环复杂度
     "complexity": [2, 10],
     //字符串最大长度
     "max-len": [2, 120, 4],
     //函数定义时括号前面要不要有空格
     "space-before-function-paren": ["error", {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "ignore"
     }],
     //首选const
     "prefer-const": ["error", {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
     }]
  }
}
