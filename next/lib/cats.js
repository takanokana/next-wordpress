// カテゴリー取得 slugを元に判別
import { catchData } from './fetch'
import { catsUrl } from '../lib/url'
import { catPostUrl } from '../lib/url'


export async function getAllCatDataFunc() {
  const allData = await catchData(catsUrl)
  const allCatData = allData.map( cat => {
    return {
      id: cat.id,
      name: cat.name,
      slug: cat.slug
    }
  })
  return allCatData
}

export async function getCatsSlugs() {
  const allData = await catchData(catsUrl)
  return allData.map( cat => {
    return {
      params: {
        slug: cat.slug,
      }
    }
  })
}

export async function getCatData(slug) {
  const allData = await catchData(catsUrl)
  const thisCat = allData.find(cat => cat.slug == slug)
  // 記事IDから記事を検索
  const postData = await catchData (catPostUrl + thisCat.id)
  return {
    slug,
    name: thisCat.name,
    posts: postData
  }
}