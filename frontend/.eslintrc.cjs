import js from '@eslint/js'
export default [
  {
    ...js.configs.recommended,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    env: {
      browser: true,
      es2021: true
    }
  }
]
