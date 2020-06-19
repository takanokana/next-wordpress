// カテゴリー取得
import { catchData } from './fetch'
import { catsUrl } from '../lib/url'

export async function getAllCatDataFunc() {
  const allData = await catchData(catsUrl)
  console.log(allData)
  const allCatData = allData.map( cat => {
    return {
      id: cat.id,
      name: cat.name,
      slug: cat.slug
    }
  })
  return allCatData
}
