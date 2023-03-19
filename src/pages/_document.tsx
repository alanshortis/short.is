import Document, { Html, Head, Main, NextScript } from 'next/document';

class ShortisDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en-GB">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ShortisDocument;
