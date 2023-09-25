module.exports = {
  extends: [
    'react-app', //  react帮配置好了一些语法，譬如箭头函数
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended', // prettier配置
  ],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    worker: true,
    jest: true,
  },
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/jsx-filename-extension': 'off', // 关闭airbnb对于jsx必须写在jsx文件中的设置
    // 关闭airbnb对于必须添加prop-types的校验
    // 'react/prop-types': 'off',
    'react/destructuring-assignment': 0,
    // 'react/destructuring-assignment': [
    //   true,
    //   'always',
    //   {
    //     ignoreClassFields: false,
    //   },
    // ],
    // 关闭要求一个表达式必须换行的要求，和Prettier冲突了
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    // 要求或禁止末尾逗号
    'comma-dangle': 'never',
    // 'comma-dangle': [
    //   'error',
    //   {
    //     arrays: 'always-multiline',
    //     objects: 'always-multiline',
    //     imports: 'always-multiline',
    //     exports: 'always-multiline',
    //     functions: 'never'
    //   }
    // ],
    'jsx-a11y/no-static-element-interactions': 'off', // 关闭非交互元素加事件必须加 role
    'jsx-a11y/click-events-have-key-events': 'off', // 关闭click事件要求有对应键盘事件
    'no-bitwise': 'off', // 不让用位操作符，不知道为啥，先关掉
    // 当只有一个模块时使用默认导出
    'import/prefer-default-export': 'off',
    indent: 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 关闭语句强制分号结尾
    // semi: ['off', 'always'],
    // 引号类型
    quotes: [0, 'single'],
    // 空行最多不能超过100行
    'no-multiple-empty-lines': [0, { max: 50 }],
    'no-plusplus': 'off',
    'import/order': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': 0,
    // "react/self-closing-comp": ["error"],
    'implicit-arrow-linebreak': ['off', 'beside'],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
