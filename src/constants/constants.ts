// admin api
export const WEBAPI = 'https://api.yamaguchi.ru/api/admin'

export const BANNERS_API = '/banners'
export const BORBOZA_PRODUCTS_API = '/borboza_products/schema'
export const BRANDS_API = '/brands'
export const CATEGORIES_SCHEMA_API = 'categories/schema'
export const CATEGORIES_API = '/categories/list'
export const CATEGORY_API = '/categories'
export const PRODUCT_API = '/products'
export const PRODUCTS_API = '/products/schema'
export const RENT_TYPES_API = '/rent_types'
export const SIZE_TYPES_API = '/sizes'
export const STATUSES_API = '/product_statuses'
export const PRODUCT_PARAMS_API = '/product_params'

// admin routes
export const PAGE_LOGIN = '/admin/login'
export const PAGE_NOT_FOUND = '/404'
export const PAGE_PRODUCTS = '/admin/products'
export const PAGE_BANNERS = '/admin/banners'
export const PAGE_CATEGORIES = '/admin/categories'

// cookies
export const COOKIES = {
  AUTH_TOKEN: 'AUTH_TOKEN',
  AUTH_TOKEN_OLD: 'AUTH_TOKEN_OLD'
}

// true если код выполняется в браузере
// ts-prune-ignore-next
export const IS_BROWSER = typeof window !== 'undefined'

export const ENV_AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN
/** true если код выполняется в сторибуке */
export const ENV_IS_STORYBOOK = process.env.STORYBOOK === 'true'
