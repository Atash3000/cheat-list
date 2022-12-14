import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {

    render() {
      return (
        <Html lang="en" >
          <Head>
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
          <body className='bg-slate-100 dark:bg-slate-900 h-screen'>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }