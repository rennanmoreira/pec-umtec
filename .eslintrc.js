module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
	],
	parserOptions: {
		parser: 'babel-eslint'
	},

	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'indent': ['error', 2],
		'vue': {
			'script-indent': [
				'error',
				2,
				{ 'baseIndent': 1 }
			]
		},
	},

}
