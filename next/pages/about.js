import Link from 'next/link'
export default function About() {
  return (
    <div>
      <h1>このページについて</h1>
      <Link href="/">
        <a>HOME</a>
      </Link>
    </div>
  )
}
