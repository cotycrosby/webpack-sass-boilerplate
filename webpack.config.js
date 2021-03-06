
const path = require('path');
const glob = require('glob');

module.exports = {
	mode: 'production',
  entry: glob.sync('./src/js/*.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
  },
	module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
					"style-loader",
					{
						loader: "file-loader",
						options: {
							name: "[name].css"
						}
					},
					"sass-loader"
				]
      },
    ],
  },

};
