import Link from 'next/link'

export default() => {
  return (
    <div>
      <h1>このページについて</h1>
      <Link href="/">
        <a>HOME</a>
      </Link>
    </div>
  )
}
