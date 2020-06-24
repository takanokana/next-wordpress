// 投稿取得 idを元に判別
import { postsUrl, wp } from '../lib/url'

export async function getPostsIds() {
  const allData = await wp.posts()
  return allData.map(post => {
    return {
      params: {
        id: String(post.id)
      }
    }
  })
}

export async function getPostData(id) {
  const allData = await wp.posts()
  const thisPost = allData.find(post => post.id == id)
  return {
    id,
    content: thisPost.content.rendered,
    title: thisPost.title.rendered
  }
}

export async function getAllPostDataFunc() {
  const allData = await wp.posts()
  const allPostData = allData.map( post => {
    return {
      id: post.id,
      title: post.title.rendered
    }
  })
  return allPostData
}

