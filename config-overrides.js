const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  // 按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // addWebpackAlias(alias)将提供的别名信息添加到webpack的别名部分。传递一个带有任意数量条目的对象文字，整个对象将被合并。
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  })
)
