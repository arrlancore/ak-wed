import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          as='style'
          href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Tangerine&display=swap'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Tangerine&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
