import { getAllPostDataFunc } from '../lib/posts'
import Link from 'next/link'

const Blog = ({allPostsData}) => {
  return (
    <div>
      <h1>ブログ記事一覧</h1>
      <ul>
        {allPostsData.map(({id, title}) => {
          return(
            <li
              key={`blog_${id}`}
            >
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      <Link href="/"><a>Topへ戻る</a></Link>
    </div>
  )
}

export default Blog

export async function getStaticProps() {
  const allPostsData = await getAllPostDataFunc()
  return {
    props: {
      allPostsData
    }
  }
}
