import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render(){
    return (
      <Html lang="en">
        <Head>
          <title>NextJs Shop</title>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-FB8ZBM989Q"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FB8ZBM989Q');
            `
          }} />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument