import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            {/* Preconnect links for Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

            {/* Font - Open Sans */}
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" 
                rel="stylesheet"
            />
            {/* Font - Din 2014 */}
            <link href="https://use.typekit.net/xex4owo.css" 
            rel="stylesheet" />

          {/* Light/Dark Theme Switch */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const localStorageTheme = localStorage.getItem('color-theme');
                  if (localStorageTheme === 'dark' || (!localStorageTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                })();
              `,
            }}
          />
        </Head>
        <body class="mt-20">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}