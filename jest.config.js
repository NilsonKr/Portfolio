/**
 * @type {import('@jest/types').Config.InitialOptions}
 */

const config = {
	verbose: true,
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css)$': '<rootDir>/__test__/__mocks__/stylesMock.ts',
	},
};

module.exports = config;
