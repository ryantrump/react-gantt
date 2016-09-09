
var webpack = require( 'webpack' );
var path = require( 'path' );

const PATHS = {

  DIST: path.resolve( __dirname, 'dist' ),
  APP: path.resolve( __dirname, 'src' )

};

const config = {

  entry: `${PATHS.APP}/index.js`,

  output: {

    path: PATHS.DIST,
    filename: 'bundle.js'

  },

  module : {

    loaders : [

      {

        test : /\.jsx?$/,
        include : PATHS.APP,
        loader : 'babel'

      }

    ]

  },

  plugins: [

    new webpack.DefinePlugin({

      __DEV__: JSON.stringify( JSON.parse( process.env.BUILD_DEV || 'true' ) ),
      __PRERELEASE__: JSON.stringify( JSON.parse( process.env.BUILD_PRERELEASE || 'false' ) )

    })

  ]

};

module.exports = config;
