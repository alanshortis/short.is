/* eslint-disable */

const { get } = require('dot-prop');

const flatten = (arr = []) => arr.reduce((a, b) => [...a, b, ...flatten(b.children)], []);

module.exports = data => {
  const {
    styles,
    document: { children: tree },
  } = data;

  const children = flatten(tree);
  const styleKeys = Object.keys(styles);
  const stylesArray = styleKeys.map(key =>
    Object.assign(
      {
        id: key,
      },
      styles[key]
    )
  );

  const colorStyles = stylesArray.filter(style => style.styleType === 'FILL');
  const colorArray = colorStyles.map(style => {
    const child = children.find(child => get(child, 'styles.fill') === style.id);
    if (!child) return;

    const [fill] = child.fills || [];
    const { r, g, b } = fill.color;
    const opacity = fill.opacity || 1;
    const roundedOpacity = opacity < 1 ? opacity.toFixed(3) : opacity;
    const rgb = [r, g, b].map(n => n * 255);
    const color = `rgba(${rgb.join(', ')}, ${roundedOpacity})`;
    return {
      id: style.id,
      name: style.name,
      value: color,
    };
  });

  const colors = colorArray.reduce(
    (a, color) =>
      Object.assign({}, a, {
        [color.name]: color.value,
      }),
    {}
  );

  const theme = {
    colors,
  };

  return JSON.stringify(theme, null, 2);
};
