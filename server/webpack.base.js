module.exports = {

  module: {
    rules: [

      // first rule:
      {
        // we want to use babel on javaScript files!
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            [
              'env',
              {targets: {
                  browsers: ['last 2 versions']
              }}
            ]
          ]
        }
      }
    ]
  }
};