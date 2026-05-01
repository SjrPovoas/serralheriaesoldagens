import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* Google Fonts */}
        <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lobster&family=Roboto:wght@100..900&display=swap" 
            rel="stylesheet" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}