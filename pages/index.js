import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/will-king-headshot.png'

import groq from 'groq'
import client from '../client'
import Head from 'next/head'
import Date from '../components/Date'

const Index = ({posts}) => {
    return (
      <div className="">
        <Head>
          <title>Will King | Digital Performance Marketing Consultant From the Midlands</title>
          <script src="https://kit.fontawesome.com/282cc12568.js" crossorigin="anonymous"></script>
        </Head>
        <div className="md:flex mb-4">
          <div className="md:w-2/4">
            <h1>Hi.</h1>
            <p>I'm Will, and I'm an ecommerce and digital marketing based in the Midlands.</p>

            <p>You can find me at Shopify Plus agency <Link href="https://eastsideco.com/">Eastside Co</Link> in my role as Strategy Director. I've been at Eastside for 4 years and previously headed up the SEO team as SEO Director. My job is to help our Shopify clients build and execute successful ecommerce strategies.</p>

            <p>This website is a sandbox where I experiment with various technologies. At the moment the front-end's built on next.js with my blog content pulled in from Sanity CMS. This site was pretty much an excuse to learn how to build a site using a JamStack setup.</p>
          </div>
          <div className="md:w-2/4 flex justify-center items-center">
              <div>
                <Image 
                  src={profilePic}
                  alt="Will King"
                  className='rounded-[50%]'
                />
              </div>
          </div>
        </div>
        
        <div className="">
          <h2>Blog Posts</h2>
          {posts.length > 0 && posts.map(
            ({ _id, title = '', slug = '', publishedAt = '' }) =>
              slug && (
                <li key={_id}>
                  <Link className="" href="/posts/[slug]" as={`/posts/${slug.current}`}>
                    {title} - <Date dateString={publishedAt} />
                  </Link>
                </li>
              )
          )}
        </div>
      </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
    *[_type == "post"]{
        _id,
        title,
        slug,
        author -> {
          name,
          image
        },
        description,
        mainImage,
        slug,
        publishedAt
      }
    `)
    return {
      props: {
        posts
      }
    }
}

export default Index