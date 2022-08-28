const writing = (title, date) => `---
title: '${title}'
date: '${date}'
intro: ''
---
`;

const daily = (streak, date) => `---
title: ${streak}
date: '${date}'
---
`;

module.exports = { writing, daily };
