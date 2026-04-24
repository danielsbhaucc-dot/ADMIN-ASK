import config from '../../../payload.config'
import { AdminView } from '@payloadcms/next/views'

const Page = AdminView({
  config,
  importMap: {
    baseDir: process.cwd(),
  },
})

export default Page
