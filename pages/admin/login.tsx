import { type FC, memo } from 'react'

import LoginPage from '@/src/components/pages/LoginPage/LoginPage'

/** домашняя страница */
const Login: FC = () => (
  <LoginPage />
)

// ts-prune-ignore-next
export default memo(Login)
