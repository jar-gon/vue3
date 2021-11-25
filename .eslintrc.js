module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // prettier error
    "prettier/prettier": "error",
    // allow async-await
    "generator-star-spacing": "off",
    // 最后一个属性后允许有个空格
    "comma-dangle": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    // 属性换行
    "vue/max-attributes-per-line": "off",
    // html标签自关闭
    "vue/html-self-closing": "off",
    // html标签占一行
    "vue/singleline-html-element-content-newline": "off",
    // vue prop 定义类型
    "vue/require-prop-types": "off",
    // html缩进
    "vue/html-indent": "off",
    // 可以export default function
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
