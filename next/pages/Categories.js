import Link from 'next/link'
import { getAllCatDataFunc } from '../lib/cats'

const Categories = ({allCatData}) => {
  return (
    <div>
      <h1>カテゴリー一覧</h1>
      <ul>
        {allCatData.map(({id, slug, name}) => {
          return (
            <li
              key={`cat_${id}`}
            >
              <Link href="/cats/[slug]" as={`/cats/${slug}`}>
                <a>{name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      <Link href="/"><a>Topへ戻る</a></Link>
    </div>
  )
}

export default Categories

export async function getStaticProps() {
  const allCatData = await getAllCatDataFunc()
  return {
    props: {
      allCatData
    }
  }
}
