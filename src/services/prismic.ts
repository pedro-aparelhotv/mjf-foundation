import * as Prismic from '@prismicio/client'

const prismicApi = Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
})

async function getDefaults() {
  const navigation = await prismicApi.getSingle('navigation')
  const meta = await prismicApi.getSingle('meta')

  return { navigation, meta }
}

export { getDefaults }
export default prismicApi
