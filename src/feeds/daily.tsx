import fs from 'fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { MDXRemote } from 'next-mdx-remote';
import { dailyCount, dailyPosts } from '../data/daily';
import { meta } from '../data/meta';

const FEED_FOR = 'daily';
const allPosts = await dailyPosts(0, dailyCount);

const formattedPosts = allPosts.map(({ date, day, title, mdxContent }) => ({
  date,
  day,
  title,
  content: renderToStaticMarkup(<MDXRemote {...mdxContent} />),
}));

const dailyXml = (): string => `<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${meta.title}</title>
  <link href="${meta.url}/${FEED_FOR}.xml" rel="self"/>
  <link href="${meta.url}/${FEED_FOR}"/>
  <updated>${new Date(formattedPosts[0].date).toISOString()}</updated>
  <id>${meta.url}/</id>
  <author>
    <name>${meta.author}</name>
    <email>${meta.email}</email>
  </author>
  ${formattedPosts
    .map(
      post => `<entry>
      <title>#${post.day}</title>
      <link href="${meta.url}/${FEED_FOR}/${post.day}"/>
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

export const generateDailyFeed = (): void => {
  fs.writeFileSync(`public/${FEED_FOR}.xml`, dailyXml());
};
