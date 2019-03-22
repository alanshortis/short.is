// /* eslint-disable */

// // transform figma document into theme object
// const { get } = require('dot-prop');
// const { struct } = require('superstruct');

// const FILL = 'FILL';
// const TEXT = 'TEXT';

// const roundingPrecision = 3;

// const flatten = (arr = []) => arr.reduce((a, b) => [...a, b, ...flatten(b.children)], []);

// // schema
// const Theme = struct({
//   metadata: 'object',
//   colors: 'object',
//   textStyles: struct.dict([
//     'string',
//     struct({
//       fontFamily: 'string',
//       fontSize: 'number',
//       fontWeight: 'number',
//       lineHeight: 'number',
//     }),
//   ]),
//   fonts: 'array',
//   fontWeights: 'array',
// });

// const Data = struct.partial({
//   name: 'string',
//   lastModified: 'string',
// });

// const unique = arr => [...new Set(arr)];

// module.exports = (data = {}) => {
//   Data(data);
//   const {
//     styles = {},
//     document: { children: tree = [] },
//   } = data;
//   const children = flatten(tree);

//   const styleKeys = Object.keys(styles);
//   const stylesArray = styleKeys.map(key =>
//     Object.assign(
//       {
//         id: key,
//       },
//       styles[key]
//     )
//   );

//   // colors
//   const colorStyles = stylesArray.filter(style => style.styleType === FILL);
//   const colorArray = colorStyles
//     .map(style => {
//       const child = children.find(child => get(child, 'styles.fill') === style.id);
//       if (!child) return;

//       const [fill = {}] = child.fills || [];
//       const { r, g, b, a } = fill.color;
//       const opacity = fill.opacity || a;
//       const roundedOpacity = opacity < 1 ? opacity.toFixed(roundingPrecision) : opacity;
//       const rgb = [r, g, b].map(n => n * 255);
//       const color = `rgba(${rgb.join(', ')}, ${roundedOpacity})`;
//       return {
//         id: style.id,
//         name: style.name,
//         value: color,
//       };
//     })
//     .filter(Boolean);

//   const colors = colorArray.reduce(
//     (a, color) =>
//       Object.assign({}, a, {
//         [color.name]: color.value,
//       }),
//     {}
//   );

//   // textStyles
//   const textStyles = stylesArray.filter(style => style.styleType === TEXT);
//   const textArray = textStyles
//     .map(style => {
//       const child = children.find(child => get(child, 'styles.text') === style.id);
//       if (!child) return;
//       return {
//         id: style.id,
//         name: style.name,
//         value: child.style,
//       };
//     })
//     .filter(Boolean)
//     .map(style => {
//       const { fontFamily, fontWeight, fontSize } = style.value;
//       const lineHeight = style.value.lineHeightPercent / 100;
//       return Object.assign({}, style, {
//         value: {
//           fontFamily,
//           fontWeight,
//           fontSize,
//           lineHeight,
//         },
//       });
//     });

//   const textStylesObject = textArray.reduce(
//     (a, style) =>
//       Object.assign({}, a, {
//         [style.name]: style.value,
//       }),
//     {}
//   );

//   const fontWeights = unique(textArray.map(style => style.value.fontWeight)).sort();
//   const fonts = unique(textArray.map(style => style.value.fontFamily));

//   const theme = {
//     metadata: {
//       name: data.name,
//       lastModified: data.lastModified,
//     },
//     colors,
//     textStyles: textStylesObject,
//     fonts,
//     fontWeights,
//   };

//   // validate
//   Theme(theme);

//   return theme;
// };

// module.exports.schemas = {
//   Data,
//   Theme,
// };
