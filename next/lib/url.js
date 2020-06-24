
// docker用
// export const domain = 'http://wordpress'
// ローカル確認用
export const domain = 'http://localhost'

// 記事一覧
export const postsUrl = `${domain}/wp/wp-json/wp/v2/posts`
// カテゴリー一覧
export const catsUrl = `${domain}/wp/wp-json/wp/v2/categories`
// カテゴリーから記事を検索,後ろにidを置く
export const catPostUrl = `${domain}/wp/wp-json/wp/v2/posts?categories=`
