module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/'
		: '/base-vue-npm-package/',
	outputDir: process.env.NODE_ENV === 'production'
		? __dirname+'/lib'
		: __dirname+'/demo',
	css: {
		extract: false
	}
};
