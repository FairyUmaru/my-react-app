/*
 * @FilePath: /my-app/.eslintrc.js
 * @Descripttion:
 * @Author: Umaru
 * @Date: 2022-03-01 13:55:06
 * @LastEditors: Umaru
 * @LastEditTime: 2022-11-23 23:07:21
 */
module.exports = {
    extends: ["airbnb", "airbnb/hooks", "eslint:recommended"],
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        worker: true,
        jest: true
    },
    plugins: ["import"],
    parser: "@typescript-eslint/parser",
    settings: {
        "import/resolver": {
            typescript: {}
        }
    },
    rules: {
        indent: 0,
        "no-param-reassign": 0,
        "no-restricted-syntax": 0,
        "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 关闭语句强制分号结尾
        semi: ['off', 'always'],
        // 引号类型
        quotes: [0, "single"],
        // 要求或禁止末尾逗号
        'comma-dangle': 0,
        // 空行最多不能超过100行
        'no-multiple-empty-lines': [0, { max: 50 }],
        "no-plusplus": "off",
        "import/order": "off",
        "no-use-before-define": "off",
        "import/prefer-default-export": "warn",
        "object-curly-newline": 0,
        // "react/self-closing-comp": ["error"],
        "implicit-arrow-linebreak": ['off', 'beside'],
        "react/jsx-filename-extension": [
            2,
            {
                extensions: [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                ts: "never",
                tsx: "never"
            }
        ]
    }
}
