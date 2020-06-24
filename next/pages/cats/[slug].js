import CatLayout from '../../components/catLayout'
import Head from 'next/head'
import Link from 'next/link'
import { getCatsSlugs, getCatData } from '../../lib/cats'

// カテゴリ名を取得した後, カテゴリslugを元に記事一覧を取得
export default function Post({ catData }) {
  console.log(catData)
  return (
    <CatLayout>
      <h1>{catData.name}</h1>
      <p>記事一覧</p>
      {catData.posts.map( ({title, id,}) => {
        return (
        <article key={id}>
          <Link href="/posts/[id]" as={`/posts/${id}`}>
            <h2>{title.rendered}</h2>
          </Link>

        </article>)
      })}
      <Link href="/categories"><a>カテゴリ一覧へ戻る</a></Link>
    </CatLayout>
  )
}

export async function getStaticPaths() {
  const paths = await getCatsSlugs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const catData = await getCatData(params.slug)
  return {
    props: {
      catData
    }
  }
}
