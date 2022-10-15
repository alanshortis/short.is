const writing = (title, date) => `---
title: '${title}'
date: '${date}'
intro: ''
---
`;

const daily = (streak, date) => `---
day: '${streak}'
date: '${date}'
---
`;

module.exports = { writing, daily };
