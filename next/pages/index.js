import Link from 'next/link'
import styles from './index.module.scss'
const Index = props => {
  return (
    <div>
      <h1>トップページ</h1>
      <p>現在はサーバー側でレンダリング{props.isServer? 'された' : 'されてない'}</p>
      <div
      >
        <Link href="/About">
          <a className={styles.linkBtn}>About</a>
        </Link>
        <Link href="/Blog">
          <a className={styles.linkBtn}>Blog</a>
        </Link>
        <Link href="/Categories">
          <a className={styles.linkBtn}>Categories</a>
        </Link>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      isServer: typeof window === 'undefined',
      // getPostsData: getPostsData
    }
  }
}

export default Index
