import { Head, Html, Main, NextScript } from 'next/document';

import { gaId } from '@/constant/env';

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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
