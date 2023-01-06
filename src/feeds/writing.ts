import fs from 'fs';
import { allWritingFrontMatter } from '../data/writing';
import { meta } from '../data/meta';

const FEED_FOR = 'writing';

const writingXml = (): string => `<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${meta.title}</title>
  <link href="${meta.url}/${FEED_FOR}.xml" rel="self"/>
  <link href="${meta.url}/${FEED_FOR}"/>
  <updated>${new Date(allWritingFrontMatter[0].date).toISOString()}</updated>
  <id>${meta.url}/</id>
  <author>
    <name>${meta.author}</name>
    <email>${meta.email}</email>
  </author>
  ${allWritingFrontMatter
    .map(
      post => `<entry>
      <title>${post.title}</title>
      <link href="${meta.url}/${FEED_FOR}/${post.slug}"/>
      <updated>${new Date(post.date).toISOString()}</updated>
      <id>${meta.url}/${FEED_FOR}/${post.slug}</id>
      <content type="html">
        <![CDATA[
        <p>${post.intro}</p>
        <a href="{meta.url}/${FEED_FOR}/${post.slug}">Read more</a>
      ]]>
      </content>
    </entry>`
    )
    .join('')}
  </feed>
`;

export const generateWritingFeed = (): void => {
  fs.writeFileSync(`public/${FEED_FOR}.xml`, writingXml());
};
