// 投稿取得 idを元に判別
import { postsUrl } from '../lib/url'
import { catchData } from './fetch'

export async function getPostsIds() {
  const allData = await catchData(postsUrl)
  return allData.map(post => {
    return {
      params: {
        id: String(post.id)
      }
    }
  })
}

export async function getPostData(id) {
  const allData = await catchData(postsUrl)
  const thisPost = allData.find(post => post.id == id)
  return {
    id,
    content: thisPost.content.rendered,
    title: thisPost.title.rendered
  }
}

export async function getAllPostDataFunc() {
  const allData = await catchData(postsUrl)
  const allPostData = allData.map( post => {
    return {
      id: post.id,
      title: post.title.rendered
    }
  })
  return allPostData
}

