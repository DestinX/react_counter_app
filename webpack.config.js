module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    // root: __dirname,
    // alias: {
    //   Main: 'app/components/Main.jsx',
    //   Nav: 'app/components/Nav.jsx'
    // },
    extensions: ['', '.js', '.jsx'] // for webpack build look for following extensions
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'] // code standards
        },
        test: /\.jsx?$/, // filter files to be accessed
        exclude: /(node_modules|bower_components)/ // exclude these directories from babel-loader
      },
      // For bootstrap
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=10000&name=app/styles/bootstrap_fonts/[name].[ext]',
        include: [
            __dirname
        ]
      }
    ]
  },
  devtool: 'source-map' // Better looking debuuging code, as orginal - use: debugger;
};
