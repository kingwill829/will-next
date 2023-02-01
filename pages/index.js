import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/will-king-headshot.png'

import groq from 'groq'
import client from '../client'
import Head from 'next/head'
import Date from '../components/Date'
import { NextSeo } from 'next-seo';

const Index = ({posts}) => {
    return (
      <div className="">
        <NextSeo
          title="Will King | Digital Performance Marketing Consultant From the Midlands"
          description="A short description goes here."
        />
        <div className='bg-[#f5f5f5] h-[200px] relative mb-[100px]'>
         <Image 
            src={profilePic}
            alt="Will King"
            className='rounded-[50%] absolute mx-auto inset-x-0	text-center top-[28px] border-8	border-white'
          />
        </div>
        <div className="mb-4 w-4/5 sm:w-2/3	md:w-1/2 m-auto">
          <div className="text-center mb-4">
            <h1 className="text-center">Hi.</h1>
            <p>I'm Will, and I'm an ecommerce and digital marketing based in the Midlands.</p>

            <p>You can find me at Shopify Plus agency <Link href="https://eastsideco.com/">Eastside Co</Link> in my role as Strategy Director. I've been at Eastside for 4 years and previously headed up the SEO team as SEO Director. My job is to help our Shopify clients build and execute successful ecommerce strategies.</p>

            <p>This website is a sandbox where I experiment with various technologies. At the moment the front-end's built on next.js with my blog content pulled in from Sanity CMS. This site was pretty much an excuse to learn how to build a site using a JamStack setup.</p>
          </div>

          <div className="">
            <h2>Blog Posts</h2>
            <ul>
            {posts.length > 0 && posts.map(
              ({ _id, title = '', slug = '', publishedAt = '', description = '' }) =>
                slug && (
                  <li key={_id} className="list-none mb-8">
                    <Link className="" href="/posts/[slug]" as={`/posts/${slug.current}`}>
                      {title}
                    </Link>
                    <span className='block text-slate-400 italic'><Date dateString={publishedAt} /></span>
                    <p>{description}</p>
                    
                  </li>
                )
            )}
            </ul>
          </div>
        </div>
      </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
    *[_type == "post"]{
        _id,
        title,
        description,
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