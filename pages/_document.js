import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {

    render() {
      return (
        <Html lang="en" >
          <Head>
          <meta name='viewport' content='initial-scale=1, viewport-fit=cover'/>
           <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3362625982165215"
           crossOrigin="anonymous"></script>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
          </Head>
          <body className='bg-white dark:bg-primary'>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }