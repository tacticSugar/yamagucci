import { FormTabs } from '@/src/components/Form/_types'
import { BRANDS_API, CATEGORIES_API, CATEGORIES_SCHEMA_API, STATUSES_API } from '@/src/constants/constants'

export const productFormConfiguration: FormTabs = {
  productTabs: [
    {
      panelClassName: 'tab-panel-system',
      tabContent: [
        {
          name: 'id',
          type: 'hidden',
          validations: []
        },
        {
          label: '',
          name: 'note',
          placeholder: 'Примечание',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Borboza ID',
          name: 'borboza_id',
          placeholder: 'Подключите товар к системе учёта',
          type: 'search',
          validations: [],
          widthNumber: 49
        },
        {
          label: 'Цена',
          name: 'price',
          placeholder: '2 700 000',
          type: 'number',
          validations: [],
          widthNumber: 14
        },
        {
          label: 'Цена по акции',
          name: 'price_promotion',
          placeholder: '2 700 000',
          type: 'number',
          validations: [],
          widthNumber: 14
        },
        {
          label: 'Цена предзаказа',
          name: 'price_preorder',
          placeholder: '2 700 000',
          type: 'number',
          validations: [],
          widthNumber: 14
        },
        {
          label: 'Название товара',
          name: 'name',
          placeholder: 'Точно как в борбозе, можно использовать <br>',
          type: 'text',
          validations: [],
          widthNumber: 39
        },
        {
          label: 'Слоган',
          name: 'slogan_text',
          placeholder: 'Мотивирующая на покупку фраза',
          type: 'text',
          validations: [],
          widthNumber: 39
        },
        {
          label: 'Размер',
          name: 'slogan_font_size',
          placeholder: '35 px',
          type: 'text',
          validations: [],
          widthNumber: 9
        },
        {
          label: 'Цвет',
          name: 'slogan_color',
          placeholder: '#E03638',
          type: 'text',
          validations: [],
          widthNumber: 9
        },
        {
          label: 'Бренд',
          name: 'brand_id',
          optionsApi: BRANDS_API,
          placeholder: '#E03638',
          type: 'select',
          validations: [],
          widthNumber: 19
        },
        {
          label: 'Модель',
          name: 'model',
          placeholder: 'Укажите название товара без бренда',
          type: 'text',
          validations: [],
          widthNumber: 39
        },
        {
          label: 'Короткое название',
          name: 'short_name',
          placeholder: 'Например, Массажное кресло',
          type: 'text',
          validations: [],
          widthNumber: 39
        },
        {
          label: 'Адрес страницы',
          name: 'url',
          placeholder: 'tovari-dlya-zdorovya/yamaguchi-nephrite-therapy-new',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Системное название',
          name: 'system_name',
          placeholder: '/yamaguchi-yamaguchi',
          type: 'text',
          validations: [],
          widthNumber: 39
        },
        {
          label: 'Популярность',
          name: 'popularity',
          placeholder: '33',
          type: 'number',
          validations: [],
          widthNumber: 19
        },
        {
          cfgGroupStyles: { gap: '8rem', height: '6rem' },
          groupTitle: 'Системные бейджи',
          inputs: [
            {
              label: 'Акция',
              name: 'badge_promo',
              type: 'checkbox',
              typeValue: 'boolean',
              validations: []
            },
            {
              label: 'Новинка',
              name: 'badge_new',
              type: 'checkbox',
              typeValue: 'boolean',
              validations: []
            },
            {
              label: 'Хит',
              name: 'badge_bestseller',
              type: 'checkbox',
              typeValue: 'boolean',
              validations: []
            }
          ],
          type: 'group',
          widthNumber: 39
        },
        {
          label: 'Статус',
          name: 'status_id',
          optionsApi: STATUSES_API,
          placeholder: '#E03638',
          type: 'select',
          validations: [],
          widthNumber: 19
        }
      ],
      tabTitle: 'Системное'
    },
    {
      panelClassName: 'tab-panel-landing',
      tabContent: [
        {
          cfgStyles: { padding: '2rem' },
          label: 'Категория для сравнения',
          name: 'category_compare',
          optionsApi: CATEGORIES_API,
          placeholder: 'Выберите категорию',
          type: 'select',
          validations: [],
          widthNumber: 100
        },
        {
          cfgStyles: { padding: '2rem' },
          label: 'Категории товара',
          name: 'categories[]',
          optionsApi: CATEGORIES_SCHEMA_API,
          placeholder: 'Выберите категорию',
          type: 'categoriesModal',
          validations: [],
          widthNumber: 100,
          withList: true
        },
        {
          label: 'С этим товаром покупают на лендинге',
          listTitle: 'Добавлены',
          name: 'additional_products_landing[]',
          placeholder: 'Выберите товар',
          type: 'searchAdditionalProduct',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'С этим товаром покупают в корзине',
          listTitle: 'Добавлены',
          name: 'additional_products_basket[]',
          placeholder: 'Выберите товар',
          type: 'searchAdditionalProduct',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Короткое описание',
          name: 'text_short',
          type: 'ckeditor'
        },
        {
          label: 'Полное описание',
          name: 'text_full',
          type: 'ckeditor'
        },
        {
          label: 'Описание для приложения',
          name: 'text_app',
          type: 'ckeditor'
        }
      ],
      tabTitle: 'Лендинг'
    },
    {
      panelClassName: 'tab-panel-seo',
      tabContent: [
        {
          cfgStyles: { padding: '2rem' },
          label: 'Заголовок страницы (seo_title)',
          name: 'seo_title',
          placeholder: 'Введите заголовок для СЕО',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          cfgStyles: { padding: '2rem' },
          label: 'Ключевые слова (НЕТ ДАННЫХ. Пока search_keywords)',
          name: 'search_keywords',
          placeholder: 'Введите ключевые слова через пробел',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          cfgStyles: { padding: '2rem' },
          label: 'Описание страницы (seo_description)',
          name: 'seo_description',
          placeholder: 'Введите описание страницы для СЕО',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          cfgGroupStyles: { gap: '1rem' },
          cfgStyles: { borderBottom: '1px solid #E5E5E5', borderTop: '1px solid #E5E5E5', padding: '4rem 2rem' },
          inputs: [
            {
              label: 'Категория для хлебных крошек (category_breadcrumbs_id)',
              name: 'category_breadcrumbs_id',
              placeholder: 'Выберите категорию',
              type: 'search',
              widthNumber: 100
            },
            {
              label: 'Категория для фида (category_feed_id)',
              name: 'category_feed_id',
              placeholder: 'Выберите категорию',
              type: 'search',
              widthNumber: 100
            }
          ],
          type: 'group',
          widthNumber: 100
        },
        {
          label: 'Описание в YML (yandex_desc)',
          name: 'yandex_desc',
          type: 'ckeditor'
        },
        {
          cfgStyles: { margin: '2rem' },
          label: 'Выгружать в YML',
          name: 'yandex_export_yml',
          type: 'checkbox',
          typeValue: 'boolean',
          validations: [],
          widthNumber: 100
        },
        {
          cfgStyles: { margin: '2rem' },
          label: 'Исключение для XML файла',
          name: 'yandex_xml_exception',
          type: 'checkbox',
          typeValue: 'boolean',
          validations: [],
          widthNumber: 100
        },
        {
          cfgStyles: { padding: '2rem' },
          label: 'Так же искать продукт по этим словам в поиске сайта',
          name: 'search_keywords',
          type: 'textarea',
          validations: [],
          widthNumber: 100
        }
      ],
      tabTitle: 'SEO'
    },
    {
      panelClassName: 'tab-panel-tech',
      tabContent: [
        {
          name: 'params',
          type: 'params'
        }
      ],
      tabTitle: 'Тех. Хар.'
    },
    {
      panelClassName: 'tab-panel-rent',
      tabContent: [
        {
          name: 'rent',
          type: 'rent'
        }
      ],
      tabTitle: 'Аренда'
    },
    {
      panelClassName: 'tab-panel-size',
      tabContent: [
        {
          name: 'size',
          type: 'size'
        }
      ],
      tabTitle: 'Размеры'
    }
  ]
}
