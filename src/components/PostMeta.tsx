import type { FC } from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { MetaContext } from '../data/meta';
import { A, Label, PostDate } from '.';

interface Props {
  date: string;
  title: string;
}

const Sticker = styled.div`
  @media ${p => p.theme.media.medium} {
    grid-column: 1 / 6;
    position: sticky;
    top: 8rem;
  }
`;

const StyledP = styled.p`
  margin-top: calc(Var(--spacing) / 4);
`;

export const PostMeta: FC<Props> = ({ date, title }) => {
  const router = useRouter();
  const meta = useContext(MetaContext);
  const shareUrl = meta.url + router.asPath;
  const tweetText = encodeURI(`${title} by ${meta.twitter}`);
  const twitterUrl = `https://twitter.com/share?text=${tweetText}&url=${shareUrl}`;

  return (
    <Sticker>
      <PostDate date={date} />
      <StyledP>
        <Label>
          <A href={twitterUrl}>Tweet</A> &middot;{' '}
          <A href="https://www.buymeacoffee.com/alanshortis">Buy me a coffee</A>
        </Label>
      </StyledP>
    </Sticker>
  );
};
