import React from 'react';
import fs from 'fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { MDXRemote } from 'next-mdx-remote';
import { postCount, getDailyPosts } from '@/data';
import { meta } from '@/context';

interface FeedPost {
  date: string;
  day: string;
  title: string;
  content: string;
}

const dailyXml = (
  formattedPosts: FeedPost[],
  updated: string
): string => `<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${meta.title}</title>
  <link href="${meta.url}/daily.xml" rel="self"/>
  <link href="${meta.url}/daily"/>
  <updated>${new Date(updated).toISOString()}</updated>
  <id>${meta.url}/</id>
  <author>
    <name>${meta.author}</name>
  </author>
  ${formattedPosts
    .map(
      (post: FeedPost) => `<entry>
      <title>#${post.day}</title>
      <link href="${meta.url}/daily/${post.day}"/>
      <updated>${new Date(post.date).toISOString()}</updated>
      <id>${meta.url}/daily/${post.day}</id>
      <content type="html">
        <![CDATA[
        <div>
          ${post.content}
        </div>
      ]]>
      </content>
    </entry>`
    )
    .join('')}
  </feed>
`;

export const generateDailyFeed = async (): Promise<void> => {
  console.log('called');

  const allPosts = await getDailyPosts(0, postCount);
  const formattedPosts = allPosts.map(({ date, day, title, mdxContent }) => ({
    date,
    day,
    title,
    content: renderToStaticMarkup(<MDXRemote {...mdxContent} />),
  }));

  const updated = formattedPosts[0].date;

  fs.writeFileSync('public/daily.xml', dailyXml(formattedPosts, updated));
};
