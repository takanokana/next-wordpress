import { postsUrl } from '../lib/url'


async function catchData() {
  const res = await fetch(postsUrl)
  const posts = await res.json()
  return posts
}

export async function getPostsIds() {
  const allData = await catchData()
  return allData.map(post => {
    return {
      params: {
        id: String(post.id)
      }
    }
  })
}

export async function getPostData(id) {
  const allData = await catchData()
  const thisPost = allData.find(post => post.id == id)
  return {
    id,
    content: thisPost.content.rendered,
    title: thisPost.title.rendered
  }
}

export async function getAllPostDataFunc() {
  const allData = await catchData()
  const allPostData = allData.map( post => {
    return {
      id: post.id,
      title: post.title.rendered
    }
  })
  return allPostData
}
