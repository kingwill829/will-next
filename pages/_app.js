import "../assets/css/global.scss";
import Layout from "../components/Layout";
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router'
import Script from 'next/script'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] }) 

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const canonicalUrl = (`https://willkingdigital.co.uk` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
    return (
        <Layout>
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