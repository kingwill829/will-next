import "../assets/css/global.scss";
import Layout from "../components/Layout";
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router'
import Script from 'next/script'
import Head from 'next/head';


import { Oswald } from '@next/font/google'
import { Quicksand } from '@next/font/google'

const oswald = Oswald({ subsets: ['latin'] }) 
const quicksand = Quicksand({ subsets: ['latin'] }) 

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const canonicalUrl = (`https://willkingdigital.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
    return (
        <Layout>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <style jsx global>{`
                html {
                    font-family: ${quicksand.style.fontFamily};
                }
                h1,h2,h3,h4,a {
                    font-family: ${oswald.style.fontFamily};
                }
            `}</style>
            <Script 
                src="https://kit.fontawesome.com/282cc12568.js"
                crossorigin="anonymous" 
                strategy="afterInteractive"
            />
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-W7RQKW2500"
                strategy="afterInteractive"
            />
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=UA-256403246-1"
                strategy="afterInteractive"
            />
            <Script id="google-analytics4" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-W7RQKW2500');
                `}
            </Script>

            <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-256403246-1');
                `}
            </Script>

            <DefaultSeo
                canonical={canonicalUrl}
            />
            <Component {...pageProps} />
        </Layout>
    )
  }