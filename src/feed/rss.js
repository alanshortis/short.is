import fs from 'fs';
import path from 'path';
import { allPostFrontMatter } from '../data/posts';
import meta from '../data/meta';

const FEED_DIR = path.join(process.cwd(), 'public/writing');

const rssXml = () => `<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${meta.title}</title>
  <link href="${meta.url}/feed.xml" rel="self"/>
  <link href="${meta.url}/writing"/>
  <updated>${new Date().toISOString()}</updated>
  <id>${meta.url}/</id>
  <author>
    <name>${meta.author}</name>
    <email>${meta.email}</email>
  </author>
  ${allPostFrontMatter
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

const generateRss = () => {
  if (process.env.NODE_ENV === 'production') {
    if (!fs.existsSync(FEED_DIR)) {
      fs.mkdirSync(FEED_DIR);
    }
    fs.writeFileSync(`${FEED_DIR}/feed.xml`, rssXml());
  }
};

export default generateRss;
