process.env.NODE_ENV = 'test'

module.exports = function(wallaby) {
  return {
    files: [
      'packages/*/tsconfig.json',
      'packages/*/package.json',
      'packages/*/src/**/*.ts*',
      'packages/*/src/**/*.snap',
      '!packages/*/src/**/*.test.ts*',
    ],
    tests: ['packages/*/src/**/*.test.ts*'],
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({module: 'es2015'}),
    },
    preprocessors: {
      '**/*.js': file =>
        require('babel-core').transform(file.content, {
          sourceMap: true,
          plugins: ['transform-es2015-modules-commonjs'],
        }),
    },
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',
    debug: false,
  }
}