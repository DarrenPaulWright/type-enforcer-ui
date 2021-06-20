module.exports = [{
	type: 'css',
	files: [
		'tests/test.css'
	]
}, {
	type: 'src',
	files: [
		'index.js',
		'src/**/*.js'
	]
}, {
	type: 'helper',
	files: [
		'tests/helpers/testValues.js'
	]
}, {
	type: 'specs',
	files: [
		'tests/**/*.test.js'
	]
}];
