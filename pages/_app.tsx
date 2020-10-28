import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../utils/theme'
// import { Router } from 'next/dist/client/router'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

// NProgress.configure({ showSpinner: false })
// Router.events.on('routeChangeStart', () => {
//    NProgress.start()
// })
// Router.events.on('routeChangeComplete', () => {
//    NProgress.done()
// })
// Router.events.on('routeChangeError', () => {
//    NProgress.done()
// })

export default function MyApp(props: AppProps) {
   const { Component, pageProps } = props

   React.useEffect(() => {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles) {
         jssStyles.parentElement!.removeChild(jssStyles)
      }
   }, [])

   return (
      <React.Fragment>
         <Head>
            <title>My page</title>
            <meta
               name='viewport'
               content='minimum-scale=1, initial-scale=1, width=device-width'
            />
         </Head>
         <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
         </ThemeProvider>
      </React.Fragment>
   )
}
