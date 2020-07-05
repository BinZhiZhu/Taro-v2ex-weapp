
console.log(
  '  ---------------------\n' +
  '< 少壮不努力，老大学程序 >\n' +
  '  ---------------------\n'
);

const path = require('path');

const projectName = process.env.PROJECT_NAME || process.env.TARO_ENV ;
const buildType = process.env.TARO_BUILD_TYPE || 'default';

const config = {
  projectName: 'V2EX_WEAPP',
  date: '2019-6-20',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist_${buildType}`,
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/taro-ui': path.resolve(__dirname, '..', 'src/taro-ui'),
    '@/constants': path.resolve(__dirname, '..', 'src/constants'),
  },
  csso: {
    enable: true,
    config: {
      // 配置项同 https://github.com/css/csso#minifysource-options
    },
  },
  babel: {
    sourceMap: true,
    presets: [['env', {modules: false}]],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": 'babel-runtime'
      }]
    ],
  },
  // plugins: {
  //   babel: {
  //     sourceMap: true,
  //     presets: [
  //       ['env', {
  //         modules: false
  //       }]
  //     ],
  //     plugins: [
  //       'transform-decorators-legacy',
  //       'transform-class-properties',
  //       'transform-object-rest-spread'
  //     ]
  //   }
  // },
  typescript: {
    compilerOptions: {
      allowSyntheticDefaultImports: true,
      baseUrl: '.',
      declaration: false,
      experimentalDecorators: true,
      jsx: 'react',
      jsxFactory: 'Nerv.createElement',
      module: 'commonjs',
      moduleResolution: 'node',
      noImplicitAny: false,
      noUnusedLocals: true,
      outDir: './dist/',
      preserveConstEnums: true,
      removeComments: false,
      rootDir: '.',
      sourceMap: true,
      strictNullChecks: true,
      target: 'es6',
    },
    include: [
      'src/**/*',
    ],
    exclude: [
      'node_modules',
    ],
    compileOnSave: false,
  },
  defineConstants: {},
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  mini: {
    webpackChain (chain, webpack) {},
    cssLoaderOption: {},
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      }
    }
  },
  // weapp: {
  //   module: {
  //     postcss: {
  //       autoprefixer: {
  //         enable: true,
  //         config: {
  //           browsers: [
  //             'last 3 versions',
  //             'Android >= 4.1',
  //             'ios >= 8'
  //           ]
  //         }
  //       },
  //       pxtransform: {
  //         enable: true,
  //         config: {
  //
  //         }
  //       },
  //       url: {
  //         enable: true,
  //         config: {
  //           limit: 10240 // 设定转换尺寸上限
  //         }
  //       },
  //       cssModules: {
  //         enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
  //         config: {
  //           namingPattern: 'module', // 转换模式，取值为 global/module
  //           generateScopedName: '[name]__[local]___[hash:base64:5]'
  //         }
  //       }
  //     }
  //   }
  // },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  rn: {
    appJson: {
      name: "taroDemo",
    }
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
