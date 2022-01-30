/**
 * This is pretty far from 'prod-ready' use of Deno.
 */
import Ask from 'https://deno.land/x/ask@1.0.6/mod.ts';

const ask = new Ask();
const date = new Date().toISOString().slice(0, 10);
const PATH = 'src/posts';
const EXT = 'mdx';

const template = (title: string): string => `---
title: '${title}'
date: '${date}'
intro: ""
---
`;

const answer = await ask.input({
  name: 'title',
  message: "What's the title of the post: ",
});

const slug = encodeURIComponent(answer.title!.split(' ').join('-').toLowerCase());
await Deno.writeTextFile(`${PATH}/${slug}.${EXT}`, template(answer.title!), { create: false });
