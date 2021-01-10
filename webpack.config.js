const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                     // Creates `style` nodes from JS strings
                    'style-loader',
                     // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
              }
        ],
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/shoelace/icons'),
              to: path.resolve(__dirname, 'dist/icons')
            }
          ]
        })
      ]
};