module.exports = {
  // 브라우저와 node에서 동작하는 전역 개념 코드 검사 규칙 설정
  env: {
    browser: true,
    node: true
  },
  // Vue와 JavaScript 코드 검사 규칙 설정
  extends: [
    // Vue (Lv2로 설정)
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3

    // JavaScript
    'eslint:recommended'
  ],
  // 코드 분석기 (구문 분석)
  parserOptions: {
    parser: 'babel-eslint' // es6 > es5
  },
  // extends에서 기본적인 규칙을 설정한 경우 rules를 별도로 설정하지 않아도 됨
  // 예외 규칙이 있다면 추가
  rules: {
    "vue/no-multiple-template-root": "off",
    "vue/valid-template-root": "off",
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }]
  }
}