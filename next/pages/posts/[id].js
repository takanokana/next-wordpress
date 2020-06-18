import PostLayout from '../../components/postLayput'
import Head from 'next/head'
import Link from 'next/link'
import { getPostsIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <PostLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article dangerouslySetInnerHTML={{ __html: postData.content}} />
      <Link href="/"><a>Topへ戻る</a></Link>
    </PostLayout>
  )
}

export async function getStaticPaths() {
  const paths = await getPostsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
