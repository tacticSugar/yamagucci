import { FormTabs } from '@/src/components/Form/_types'

export const categoryFormCfg: FormTabs = {
  categoryTabs: [
    {
      panelClassName: 'tab-panel-category-main',
      tabContent: [
        {
          name: 'id',
          type: 'hidden',
          validations: []
        },
        {
          label: 'Название',
          name: 'name',
          placeholder: 'Например, массажные кресла',
          type: 'text',
          validations: [],
          widthNumber: 49
        },
        {
          label: 'Название категории в единственном числе',
          name: 'name_single',
          placeholder: 'Например, массажное кресло',
          type: 'text',
          validations: [],
          widthNumber: 49
        },
        {
          label: 'Родительская категория',
          name: 'parent_id',
          placeholder: 'Подключить товар к системе учета',
          type: 'search',
          validations: [],
          widthNumber: 49
        },
        {
          label: 'Показывать блок с видеоотзывами с названием',
          name: 'video_reviews',
          placeholder: 'Например, массажное кресло',
          type: 'checkboxAndText',
          validations: [],
          widthNumber: 49
        },
        {
          label: 'Тип категории',
          name: 'type',
          placeholder: 'Выберите тип',
          type: 'select',
          validations: [],
          widthNumber: 49
        },
        {
          label: 'Короткое описание',
          name: 'short_description',
          textAreaRows: 3,
          type: 'textarea',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Полное описание',
          name: 'long_description',
          textAreaRows: 5,
          type: 'textarea',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Описание для приложения',
          name: 'app_description',
          textAreaRows: 3,
          type: 'textarea',
          validations: [],
          widthNumber: 100
        }
      ],
      tabTitle: 'Основное'
    },
    {
      panelClassName: 'tab-panel-category-look',
      tabContent: [
        {
          label: 'Название',
          name: 'name',
          placeholder: 'Например массажные кресла',
          type: 'text',
          validations: [],
          widthNumber: 49
        }
      ],
      tabTitle: 'Внешний вид'
    },
    {
      panelClassName: 'tab-panel-category-sort',
      tabContent: [
        {
          label: 'Название',
          name: 'name',
          placeholder: 'Например массажные кресла',
          type: 'text',
          validations: [],
          widthNumber: 49
        }
      ],
      tabTitle: 'Сортировка'
    },
    {
      panelClassName: 'tab-panel-category-seo',
      tabContent: [
        {
          label: 'Адрес страницы',
          name: 'category_url',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Заголовок страницы',
          name: 'category_title',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Ключевые слова',
          name: 'category_keywords',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Описание страницы',
          name: 'category_description',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Название категории для ЯНДЕКС Маркета',
          name: 'category_yamarket',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Значение utm_campaign',
          name: 'category_utm_campaign',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Значение sales_notes',
          name: 'category_sales_notes',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Категория продукта GOOGLE',
          name: 'category_google_product_category',
          type: 'text',
          validations: [],
          widthNumber: 100
        },
        {
          label: 'Категория продукта google (type)',
          name: 'category_google_product_type',
          type: 'text',
          validations: [],
          widthNumber: 100
        }
      ],
      tabTitle: 'SEO'
    }
  ]
}
