const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const OpenProps = require('open-props');
const postcssJitProps = require('postcss-jit-props');
const postcssCustomMedia = require('postcss-custom-media');
const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		postcssJitProps(OpenProps),
		postcssCustomMedia(),
		//But others, like autoprefixer, need to run after,
		autoprefixer(),
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};

module.exports = config;
