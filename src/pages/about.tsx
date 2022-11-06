import type { NextPage, GetStaticPropsResult } from 'next';
import type { AboutData } from '../types';
import { Layout, PostFormatting } from '../components';
import { Full, Grid, PageBody } from '../components/Grid';
import { googleBooks } from '../data/google-books';

export async function getStaticProps(): Promise<GetStaticPropsResult<AboutData>> {
  return {
    props: {
      nowReading: await googleBooks(),
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const About: NextPage<AboutData> = ({ nowReading }) => (
  <>
    <Layout title="About">
      <Grid>
        <Full>
          <h1>About</h1>
        </Full>
        <PageBody as={PostFormatting}>
          <p className="intro">Blah blah blah</p>
          <p>
            <h3>Now</h3>
            <ul>
              <li>
                Reading <a href={nowReading.url}>{nowReading.title}</a> by {nowReading.author}
              </li>
              <li>Listening to [last.fm]</li>
            </ul>
          </p>
        </PageBody>
      </Grid>
    </Layout>
  </>
);

export default About;
