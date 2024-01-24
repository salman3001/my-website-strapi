import { useMeta } from 'quasar'

interface ISeoData {
    metaTitle: string
    keywords: string
    metaDescription: string
    metaImage: {
        data: {
            attributes: {
                formats: {
                    thumbnail: {
                        url: string
                    }
                }
            }
        }
    }
}

export const useMetadata = (data: ISeoData) => {
  useMeta({
    title: data?.metaTitle || 'My Portfolio',
    meta: {
      keywords: { name: 'keywords', content: data?.keywords || '' },
      description: {
        name: 'description',
        content: data?.metaDescription || ''
      },
      ogUrl: { name: 'og:url', content: process.env.BASE_URL },
      ogTitle: {
        name: 'og:title',
        content: data?.metaTitle || 'My Portfolio'
      },
      ogDescription: {
        name: 'og:description',
        content: data?.metaDescription || ''
      },
      ogImage: {
        name: 'og:image',
        content: data?.metaImage?.data?.attributes?.formats?.thumbnail
          ?.url
          ? process.env.BASE_URL +
                      data?.metaImage?.data?.attributes?.formats?.thumbnail?.url
          : process.env.BASE_URL + '/images/sample dp.webp'
      }
    }
  })
}
