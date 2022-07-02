import path from 'path'

export default {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public/')
    },
    port: 8080,
    devMiddleware: {
      publicPath: 'https://localhost:8080/dist/'
    },
    hot: true
  }
}
