import fs from 'fs';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { postCount, getDailyPosts } from '@/data';

interface FeedPost {
  date: string;
  day: string;
  title: string;
  content: string;
}

const dailyXml = (
  formattedPosts: FeedPost[],
  updated: string
): string => /*xml*/ `<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Alan Shortis—Daily</title>
  <link href="https://short.is/daily.xml" rel="self"/>
  <link href="https://short.is/daily"/>
  <updated>${new Date(updated).toISOString()}</updated>
  <id>https://short.is/</id>
  <author>
    <name>Alan Shortis</name>
  </author>
  ${formattedPosts
    .map(
      (post: FeedPost) => /*xml*/ `<entry>
      <title>#${post.day}</title>
      <link href="https://short.is/daily/${post.day}"/>
      <updated>${new Date(post.date).toISOString()}</updated>
      <id>https://short.is/daily/${post.day}</id>
      <content type="html">
        <![CDATA[${post.content}]]>
      </content>
    </entry>`
    )
    .join('')}
  </feed>
`;

export const generateDailyFeed = async (): Promise<void> => {
  const allPosts = await getDailyPosts(0, postCount);
  const formattedPosts = allPosts.map(({ date, day, title, content }) => ({
    date,
    day,
    title,
    content: renderToStaticMarkup(<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>),
  }));

  const updated = formattedPosts[0].date;

  fs.writeFileSync('public/daily.xml', dailyXml(formattedPosts, updated));
};
