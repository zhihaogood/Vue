const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //入口可以为相对路径当然绝对路径也没错
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      module:{
          rules:[
              {
                  test:/\.css$/,
                  use:[
                      { loader: "style-loader"},
                      { loader: "css-loader"}
                  ]
              },
              //loader的加载顺序是从右到左的
              //css-loader是帮助webpack编译css文件,而style-loader是将最终的编译结果放到html中生效
              {
                  test:/\.less$/,
                  use:[
                    { loader: "style-loader"},
                    { loader: "css-loader"},
                    { loader: "less-loader"}
                  ]
              },
              {
                  test:/\.scss$/,
                  use:[
                    { loader: "style-loader"},
                    { loader: "css-loader"},
                    { loader: "sass-loader"}
                  ]
              }
          ]
      },
      plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            // template:'./src/index.html',
            filename:'index.html'
        })
    ],
      mode:'development', //打包的模式

     
  };


 