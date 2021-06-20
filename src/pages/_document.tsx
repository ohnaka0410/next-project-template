import { default as NextDocument, Html, Head, Main, NextScript } from "next/document";

/**
 * Propsの型定義
 */
type Props = {};

class Document extends NextDocument<Props> {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
