// https://www.cnblogs.com/itshare/p/11028299.html
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    // 检查html文件中的js代码
    'html'
  ],
  // add your custom rules here
  rules: {
    // "off" or 0 - 关闭规则
    // "warn" or 1 - 将规则视为一个警告
    // "error" or 2 - 将规则视为一个错误

    'prettier/prettier': 'error',
    // allow async-await
    'generator-star-spacing': 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    /**
     * 最佳实践
     */
    eqeqeq: 2, // 强制使用 === 和 !==
    'default-case': 1, // 要求 switch 语句中有 default 分支
    'no-else-return': 1, // 禁止 if 语句中 return 语句之后有 else 块
    'no-empty-function': 1, // 禁止出现空函数
    'no-multi-spaces': 1, // 禁止使用多个空格
    radix: 1, // 强制在parseInt()使用基数参数

    /**
     * 变量声明
     */
    'init-declarations': ['error', 'always'], // 声明变量必须赋值

    /**
     * ECMAScript6
     */
    'arrow-spacing': ['error', { before: true, after: true }], // 强制箭头函数的箭头前后使用空格
    'no-var': 2, // 禁止使用 var 声明变量
    'object-shorthand': 2, // 要求使用对象方法名和属性名简写
    'prefer-arrow-callback': 2, // 要求回调函数使用箭头函数
    'prefer-const': 2, // 使用 const 声明那些声明后不再被修改的变量
    'prefer-rest-params': 2, // 要求使用剩余参数而不是 arguments

    /**
     * 风格指南
     */
    // 'array-bracket-spacing': ['error', 'always'], // 数组方括号内必须空格
    'space-before-function-paren': 0, // 函数名称或function关键字与开始参数之间允许有空格
    'array-bracket-spacing': 0, // 数组方括号内必须空格
    'comma-dangle': 2, // 禁止末尾逗号
    'eol-last': 2, // 要求文件末尾存在空行
    // 对象冒号前禁止空格，冒号后必须空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 关键字（if、else等）前后必须有空格
    'keyword-spacing': ['error', { before: true, after: true }],
    // 禁止出现多行空行
    'no-multiple-empty-lines': ['error', { max: 1 }],
    semi: ['error', 'never'], // 禁止末尾分号
    quotes: ['error', 'single'], // 强制使用单引号
    'space-infix-ops': 2, // 操作符周围必须有空格
    'spaced-comment': ['error', 'always'], // 注释后面必须跟随至少一个空白
    'object-curly-spacing': 0,
    'no-unused-expressions': 0

    /**
     * vue
     */
    // 'vue/no-v-html': 0,
    // 'vue/valid-v-model': 0,
    // 'vue/no-dupe-keys': 0,
    // 'vue/order-in-components': [
    //   'error',
    //   {
    //     order: [
    //       'el',
    //       'name',
    //       'key',
    //       'parent',
    //       'functional',
    //       ['delimiters', 'comments'],
    //       ['components', 'directives', 'filters'],
    //       'extends',
    //       'mixins',
    //       ['provide', 'inject'],
    //       'ROUTER_GUARDS',
    //       'layout',
    //       'middleware',
    //       'validate',
    //       'scrollToTop',
    //       'transition',
    //       'loading',
    //       'inheritAttrs',
    //       'model',
    //       'emits',
    //       ['props', 'propsData'],
    //       'setup',
    //       'asyncData',
    //       'data',
    //       'fetch',
    //       'head',
    //       'computed',
    //       'watch',
    //       'watchQuery',
    //       'LIFECYCLE_HOOKS',
    //       'methods',
    //       ['template', 'render'],
    //       'renderError'
    //     ]
    //   }
    // ]
  }
}
