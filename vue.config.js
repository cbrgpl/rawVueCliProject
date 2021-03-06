module.exports = {
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Raw Vue CliProject'
				return args
			})
			.end()
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/scss/_predefined.scss"; @import "~rfs/sass";`,
		 	},
		},
	  },
}