import "../assets/css/global.scss";
import Layout from "../components/Layout";
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router'
import Script from 'next/script'

import { Oswald } from '@next/font/google'
import { Quicksand } from '@next/font/google'

const oswald = Oswald({ subsets: ['latin'] }) 
const quicksand = Quicksand({ subsets: ['latin'] }) 

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const canonicalUrl = (`https://willkingdigital.co.uk` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
    return (
        <Layout>
   
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
            />
            <DefaultSeo
                canonical={canonicalUrl}
            />
            <Component {...pageProps} />
        </Layout>
    )
  }