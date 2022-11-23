/*
 * @FilePath: /my-app/config-overrides.js
 * @Descripttion:
 * @Author: Umaru
 * @Date: 2022-11-03 12:03:09
 * @LastEditors: Umaru
 * @LastEditTime: 2022-11-23 23:50:25
 */
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    // 按需加载
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);
