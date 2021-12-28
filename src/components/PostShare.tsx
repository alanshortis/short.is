import type { FC } from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { MetaContext } from '../data/meta';
import { A, Label } from '.';

const StyledP = styled.p`
  margin-top: calc(Var(--spacing) / 4);
`;

interface Props {
  title: string;
}

export const PostShare: FC<Props> = ({ title }) => {
  const router = useRouter();
  const meta = useContext(MetaContext);
  const shareUrl = meta.url + router.asPath;
  const tweetText = encodeURI(`${title} by ${meta.twitter}`);
  const twitterUrl = `https://twitter.com/share?text=${tweetText}&url=${shareUrl}`;

  return (
    <StyledP>
      <Label>
        <A href={twitterUrl}>Tweet</A> &middot;{' '}
        <A href="https://www.buymeacoffee.com/alanshortis">Buy me a coffee</A>
      </Label>
    </StyledP>
  );
};
