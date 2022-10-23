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

const list = dailyDays => `/* This file was generated by a tool. */
export const dailyDays = Object.freeze([${dailyDays.toString()}]);
`;

module.exports = { writing, daily, list };
