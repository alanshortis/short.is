import { DocumentHead, Footer, Header } from '@/components';

interface Props {
  title?: string;
  intro?: string;
  children: React.ReactNode;
}

export const PageLayout = ({ title, intro, children }: Props) => (
  <>
    <DocumentHead title={title} intro={intro} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
