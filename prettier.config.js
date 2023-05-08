module.exports = {
    parser: 'typescript',
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './tailwind.config.js',
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    bracketSameLine: true,
    trailingComma: 'none'
};
