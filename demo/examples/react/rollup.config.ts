import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import babel from '@rollup/plugin-babel';

console.log(__dirname + '/../../../tsconfig.json');

export default [
    {
        input: `${__dirname}/react.example.js`,
        output: [{file: __dirname + '/react.example.umd.js', name: 'YagrReact', format: 'umd'}],
        plugins: [
            json(),
            typescript({
                useTsconfigDeclarationDir: true,
                tsconfig: '/Users/zeffirsky/Projects/ya/yagr/tsconfig.publish.json',
            }),
            babel({
                babelHelpers: 'bundled',
                presets: ['@babel/preset-react'],
            }),
            commonjs(),
            resolve(),
        ],
    },
];
