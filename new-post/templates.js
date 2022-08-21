const writing = (title, date) => `---
title: '${title}'
date: '${date}'
intro: ''
---
`;

const daily = date => `---
date: '${date}'
---
`;

module.exports = { writing, daily };
