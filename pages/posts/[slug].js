// post.js
import { useRouter } from 'next/router'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../client'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/Date'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({post}) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = [],
    publishedAt = ''
  } = post
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <div className='mb-4'>
          <h1>{title}</h1>
          <span>By {name} on <Date dateString={publishedAt} /></span>
        </div>

        {authorImage && (
          <div>
            <img
              src={urlFor(authorImage)
                .width(50)
                .url()}
              alt={`${name}'s picture`}
            />
          </div>
        )}
        <PortableText
          value={body}
          components={ptComponents}
        />
      </article>
    </div>

  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  publishedAt
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post