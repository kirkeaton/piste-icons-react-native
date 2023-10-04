module.exports = {
  expandProps: false,
  indexTemplate: require('./templates/index-template'),
  jsx: {
    babelConfig: {
      plugins: [
        '@svgr/babel-plugin-transform-react-native-svg',
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['Svg'],
            attributes: ['xmlns'],
          },
        ],
        [
          '@svgr/babel-plugin-add-jsx-attribute',
          {
            elements: ['Svg'],
            attributes: [
              {
                name: 'width',
                value: 'size',
                literal: true,
                position: 'end',
              },
              {
                name: 'height',
                value: 'size',
                literal: true,
                position: 'end',
              },
            ],
          },
          'add width and height',
        ],
        [
          '@svgr/babel-plugin-add-jsx-attribute',
          {
            elements: ['Path'],
            attributes: [
              {
                name: 'fill',
                value: 'COLORS[color]',
                literal: true,
                position: 'start',
              },
            ],
          },
          'add fill',
        ],
      ],
    },
  },
  outDir: './src',
  silent: true,
  template: require('./templates/template'),
  typescript: true,
};
