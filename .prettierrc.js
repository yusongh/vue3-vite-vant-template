module.exports = {
  // 一行的字符数，如果超过会进行换行，默认为80
  printWidth: 80,
  // 一个tab代表几个空格数，默认为80
  // tabWidth: 2,
  // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  useTabs: false,
  // 字符串是否使用单引号，默认为false，使用双引号
  singleQuote: true,
  // 行位是否使用分号，默认为true
  semi: false,
  // 仅在需要时在对象属性周围添加引号 default
  quoteProps: 'as-needed',
  // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  trailingComma: "none",
  // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  bracketSpacing: true,
  // 箭头函数只有一个参数时不需要括号
  arrowParens: 'avoid',
  // 多属性html标签的‘>’折行放置
  jsxBracketSameLine: false,
  // 不要缩进Vue文件中的脚本和样式标签 default
  vueIndentScriptAndStyle: false,
  // 代码的解析引擎，默认为babylon，与babel相同
  // "parser": "babylon",

  // 开启 eslint 支持
  eslintIntegration: true
}