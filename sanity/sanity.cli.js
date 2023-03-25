// import {defineCliConfig} from 'sanity/cli'

// export default defineCliConfig({
//   api: {
//     projectId: 't9l7ybw5',
//     dataset: 'production'
//   }
// })

import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 't9l7ybw5',
  dataset: 'production',
  useCdn: true, // set this to false if you want to always fetch from the server
})

export default client
