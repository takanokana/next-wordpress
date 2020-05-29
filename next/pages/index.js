import Link from 'next/link'

const Index = props => {
  return (
    <div>
      <h1>トップページ</h1>
      <p>現在はサーバー側でレンダリング{props.isServer? 'された' : 'されてない'}</p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      isServer: typeof window === 'undefined'
    }
  }
}

export default Index
