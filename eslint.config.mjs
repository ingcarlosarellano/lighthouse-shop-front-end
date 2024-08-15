import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import stylisticTs from '@stylistic/eslint-plugin-ts';

export default [
	{ files: [ '**/*.{js,mjs,cjs,ts,jsx,tsx}' ] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.strict,
	...tseslint.configs.stylistic,
	pluginReact.configs.flat.recommended,
	eslintConfigPrettier,
	{
		ignores: [
			'.dist/',
		],
		settings: {
			react: {
				version: 'detect',
			},
		},
		plugins: {
			'@stylistic/ts': stylisticTs,
		},
		rules: {
			indent: [ 'error', 'tab', { 'SwitchCase': 1 } ],
			quotes: [ 'error', 'single' ],
			semi: [ 'error', 'always' ],
			'comma-dangle': [ 'warn', {
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			} ],
			'@stylistic/ts/type-annotation-spacing': 'error',
			'object-curly-spacing': [ 'error', 'always' ],
			'array-bracket-spacing': [ 'error', 'always' ],
			'space-infix-ops': [ 'error', { 'int32Hint': false } ],
			'no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-explicity-any': 'off',
			'no-console': [ 'error', { 'allow': [ 'error' ] } ],
			'for-direction': 'error',
			'no-compare-neg-zero': 'warn',
			'no-const-assign': 'error',
			'no-constant-binary-expression': 'error',
			'no-constant-condition': 'warn',
			'no-dupe-args': 'error',
			'no-dupe-else-if': 'error',
			'no-dupe-keys': 'error',
			'no-duplicate-case': 'warn',
			'no-duplicate-imports': 'error',
			'no-empty-character-class': 'warn',
			'no-empty-pattern': 'error',
			'no-func-assign': 'error',
			'no-self-compare': 'error',
			'no-template-curly-in-string': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unreachable': 'warn',
			'no-unreachable-loop': 'error',
			'no-unsafe-finally': 'warn',
			'no-unsafe-negation': 'warn',
			'no-unsafe-optional-chaining': 'error',
			'valid-typeof': 'error',
		},
	},
];
