import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
}