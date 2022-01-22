import fs from 'fs';
import path from 'path';
import { allPostsFrontMatter } from '../data/all-posts';
import { meta } from '../data/meta';

const FEED_OUTPUT_PATH = path.join(process.cwd(), 'public/writing');

const rssXml = (): string => `<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${meta.title}</title>
  <link href="${meta.url}/feed.xml" rel="self"/>
  <link href="${meta.url}/writing"/>
  <updated>${new Date().toISOString()}</updated>
  <id>${meta.url}/</id>
  <author>
    <name>${meta.author}</name>
    <email>${meta.email}</email>
  </author>
  ${allPostsFrontMatter
    .map(
      post =>
        `<entry>
      <title>${post.title}</title>
      <link href="${meta.url}/writing/${post.slug}"/>
      <updated>${new Date(post.date).toISOString()}</updated>
      <id>${meta.url}/writing/${post.slug}</id>
      <content type="html">
        <![CDATA[
        <p>${post.intro}</p>
        <a href="${meta.url}/writing/${post.slug}">Read more</a>
      ]]>
      </content>
    </entry>`
    )
    .join('')}
  </feed>
`;

export const generateRss = (): void => {
  fs.mkdirSync(FEED_OUTPUT_PATH, { recursive: true });
  fs.writeFileSync(`${FEED_OUTPUT_PATH}/feed.xml`, rssXml());
};
