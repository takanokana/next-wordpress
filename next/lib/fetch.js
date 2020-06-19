
export async function catchData(url) {
  const res = await fetch(url)
  const posts = await res.json()
  return posts
}
