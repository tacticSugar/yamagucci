import { NextRequest, NextResponse } from 'next/server'

import { ADMIN_ROLE, COOKIES, PAGE_HOME, PAGE_LOGIN, PAGE_NOT_FOUND } from './src/constants/constants'

/** основной мидлвэр */
const mainMiddleware = async (req: NextRequest): Promise<any> => {
  /** кука токена */
  const AUTH_TOKEN = req.cookies.get(COOKIES.AUTH_TOKEN)?.value

  /** абсолютная ссылка для редиректа */
  const url = req.nextUrl.clone()
  /** текущая ссылка, полный путь */
  const { pathname } = req.nextUrl

  /** если открыта страница с uppercase, то редиректим ее на страницу с lowercase */
  if (pathname !== pathname.toLowerCase()) {
    url.pathname = pathname.toLowerCase()

    return NextResponse.redirect(url, 302)
  }

  /** response */
  let response

  /** работа с авторизацией */
  if (AUTH_TOKEN && ([PAGE_LOGIN].includes(pathname))) {
    /** авторизованного пользователя не пускаем на страницу логина и "забыли пароль" */
    response = NextResponse.redirect(new URL(`${PAGE_HOME}`, req.url))

    return response
  } else if (!AUTH_TOKEN && pathname.includes(ADMIN_ROLE) &&
    !([PAGE_LOGIN, PAGE_NOT_FOUND].includes(pathname))) {
    /** неавторизованным пользователям при попытке открыть закрытые страницы показываем страницу логина */

    response = NextResponse.rewrite(new URL(`${PAGE_LOGIN}`, req.url))

    return response
  }

  if (AUTH_TOKEN) {
    /** userResponse */
    const userResponse = await fetch('https://api.yamaguchi.ru/api/auth/me', {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        'Content-Type': 'application/json'
      },
      method: 'post'
    })

    /** роль юзера */
    const userData = await userResponse?.json()
    /** роль юзера */
    const userRole = userData?.role

    if (pathname.includes(ADMIN_ROLE) && userRole.toLowerCase() !== ADMIN_ROLE) {
      response = NextResponse.redirect(new URL(`${PAGE_HOME}`, req.url))

      return response
    }
  }

  /**
     * если все ок и никакие редиректы не нужны,
     * то просто показываем нужную страницу
     */
  url.pathname = pathname
  response = NextResponse.rewrite(url)

  return response
}

/** мидлвэр */
// ts-prune-ignore-next
export const middleware = async (req: NextRequest): Promise<any> => mainMiddleware(req)

// ts-prune-ignore-next
export const config = {
  matcher: [
    // сайтмапс и робот не должны исключаться
    '/sitemap.xml',
    '/robots.txt',
    // исключаются все файлы (через наличие точки) и все системное
    '/((?!api|_next|.*\\..*).*)'
  ]
}
