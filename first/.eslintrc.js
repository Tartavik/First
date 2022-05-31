module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': ['react', 'simple-import-sort', 'import'],
    'rules': {
        'no-trailing-spaces': 'error',
        'no-unused-vars': 'error',
        'no-console': 'warn',
        'no-else-return': 'error',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['var', 'let', 'const'], next: '*' },
            { blankLine: 'any', prev: ['var', 'let', 'const'], next: ['var', 'let', 'const'] },
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 0,
        'import/no-duplicates': 'error',
        'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    },
    'settings': {
        'react': {
          'version': 'detect',
        },
    }
}
