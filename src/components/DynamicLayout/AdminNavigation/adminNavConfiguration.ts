import { PAGE_BANNERS, PAGE_CATEGORIES, PAGE_PRODUCTS } from '@/src/constants/constants'
import { IconAddressBook, IconBadge, IconBrands, IconCash, IconChecked, IconComment, IconDigger, IconFile, IconFileImage, IconGame, IconGlobe, IconHome, IconList, IconMarathon, IconOrders, IconPoop, IconPrayer, IconQrcode, IconRestroom, IconSearch, IconStore, IconUnicorn } from '@/src/constants/icons'

import { AdminNavItemTypes } from './_types'

/** моковая навигация */
export const adminNavConfiguration: AdminNavItemTypes[] = [
  {
    icon: IconHome,
    id: 1,
    submenu: [
      {
        href: PAGE_BANNERS,
        icon: '',
        id: 11,
        title: 'Баннеры'
      },
      {
        href: '/mini-banners',
        icon: '',
        id: 12,
        title: 'Мини баннеры'
      }
    ],
    title: 'Главная'
  },
  {
    href: PAGE_PRODUCTS,
    icon: IconCash,
    id: 2,
    title: 'Товары'
  },
  {
    href: PAGE_CATEGORIES,
    icon: IconList,
    id: 3,
    title: 'Категории'
  },
  {
    href: '/pages',
    icon: IconFile,
    id: 4,
    title: 'Страницы'
  },
  {
    href: '/urls',
    icon: IconAddressBook,
    id: 5,
    title: 'URL-адреса'
  },
  {
    href: '/crosslides',
    icon: IconHome,
    id: 6,
    title: 'Кросс-слайды'
  },
  {
    icon: IconStore,
    id: 7,
    submenu: [
      {
        href: '#',
        icon: '',
        id: 71,
        title: 'Города'
      },
      {
        href: '#',
        icon: '',
        id: 72,
        title: 'Салоны'
      },
      {
        href: '#',
        icon: '',
        id: 73,
        title: 'Складская структура'
      },
      {
        href: '#',
        icon: '',
        id: 74,
        title: 'Синхронизация регионов'
      }
    ],
    title: 'Салоны'
  },
  {
    href: '/orders',
    icon: IconOrders,
    id: 8,
    title: 'Заказы'
  },
  {
    href: '/journal',
    icon: IconGlobe,
    id: 9,
    title: 'Журнал'
  },
  {
    href: '/not-products',
    icon: IconGame,
    id: 10,
    title: 'Не-товары'
  },
  {
    href: '/comments',
    icon: IconComment,
    id: 11,
    title: 'Комменты'
  },
  {
    href: '/files',
    icon: IconFileImage,
    id: 12,
    title: 'Файлы'
  },
  {
    icon: IconUnicorn,
    id: 13,
    submenu: [
      {
        href: '#',
        icon: '',
        id: 131,
        title: 'Список'
      },
      {
        href: '#',
        icon: '',
        id: 132,
        title: 'Фото До / После'
      },
      {
        href: '#',
        icon: '',
        id: 133,
        title: 'Истории героев'
      }
    ],
    title: 'Юзеры'
  },
  {
    href: '/bages',
    icon: IconBadge,
    id: 14,
    title: 'Бейджи'
  },
  {
    icon: IconChecked,
    id: 15,
    submenu: [
      {
        href: '#',
        icon: '',
        id: 151,
        title: 'Атрибуты'
      },
      {
        href: '#',
        icon: '',
        id: 152,
        title: 'Группы'
      }
    ],
    title: 'Атрибуты'
  },
  {
    href: '/brands',
    icon: IconBrands,
    id: 16,
    title: 'Бренды'
  },
  {
    href: '/search',
    icon: IconSearch,
    id: 17,
    title: 'Поиск'
  },
  {
    icon: IconRestroom,
    id: 18,
    submenu: [
      {
        href: '#',
        icon: '',
        id: 181,
        title: 'Варианты'
      },
      {
        href: '#',
        icon: '',
        id: 182,
        title: 'Группы'
      }
    ],
    title: 'Варианты'
  },
  {
    href: '/qr-codes',
    icon: IconQrcode,
    id: 19,
    title: 'Список QR-кодов'
  },
  {
    href: '/marathon',
    icon: IconMarathon,
    id: 20,
    title: 'Марафон'
  },
  {
    icon: IconPoop,
    id: 21,
    submenu: [
      {
        href: '#',
        icon: '',
        id: 211,
        title: 'Хиты (отключен)'
      },
      {
        href: '#',
        icon: '',
        id: 212,
        title: 'Статьи (Архив)'
      },
      {
        href: '#',
        icon: '',
        id: 213,
        title: 'Генерация ссылок для страниц'
      }
    ],
    title: 'Legacy'
  },
  {
    icon: IconDigger,
    id: 22,
    submenu: [
      {
        href: '#',
        icon: '',
        id: 221,
        title: 'Почтовые шаблоны'
      }
    ],
    title: 'Dev'
  },
  {
    icon: IconPrayer,
    id: 23,
    submenu: [
      {
        href: '#',
        icon: '',
        id: 231,
        title: 'Права доступа'
      },
      {
        href: '#',
        icon: '',
        id: 232,
        title: 'Компании'
      },
      {
        href: '#',
        icon: '',
        id: 233,
        title: 'Логи'
      },
      {
        href: '#',
        icon: '',
        id: 234,
        title: 'Импорт товара из Барбозы'
      },
      {
        href: '#',
        icon: '',
        id: 235,
        title: 'Настройка системы'
      },
      {
        href: '#',
        icon: '',
        id: 236,
        title: 'Сбросить кэш'
      }
    ],
    title: 'SuperAdmin'
  }
]
