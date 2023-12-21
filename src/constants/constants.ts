// admin api
export const WEBAPI = 'https://api.yamaguchi.ru/api'

export const BANNERS_API = '/admin/banners'
export const BORBOZA_PRODUCTS_API = '/admin/borboza_products/schema'
export const BRANDS_API = '/admin/brands'
export const CATEGORIES_SCHEMA_API = '/admin/categories/schema'
export const CATEGORIES_API = '/admin/categories/list'
export const CATEGORY_API = '/admin/categories'
export const PRODUCT_API = '/admin/products'
export const PRODUCTS_API = '/admin/products/schema'
export const RENT_TYPES_API = '/admin/rent_types'
export const SIZE_TYPES_API = '/admin/sizes'
export const STATUSES_API = '/admin/product_statuses'
export const PRODUCT_PARAMS_API = '/admin/product_params'
export const USER_API = '/auth/me'

// admin routes
export const PAGE_LOGIN = '/login'
export const PAGE_HOME = '/'
export const PAGE_NOT_FOUND = '/404'
export const PAGE_PRODUCTS = '/admin/products'
export const PAGE_BANNERS = '/admin/banners'
export const PAGE_CATEGORIES = '/admin/categories'

// cookies
export const COOKIES = {
  AUTH_TOKEN: 'AUTH_TOKEN',
  AUTH_TOKEN_OLD: 'AUTH_TOKEN_OLD'
}

export const ADMIN_ROLE = 'admin'

// true если код выполняется в браузере
// ts-prune-ignore-next
export const IS_BROWSER = typeof window !== 'undefined'

export const ENV_AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN
/** true если код выполняется в сторибуке */
export const ENV_IS_STORYBOOK = process.env.STORYBOOK === 'true'
