# Почему типы, а не интерфейсы
[Types vs Interfaces](https://www.youtube.com/watch?v=Idf0zh9f3qQ)

# Сохранение типов
Все типы стараемся выносить в отдельный файл _types.ts

# Нейминг типов

Важнее всего стандартные окончания типов, чтоб было из названия понятно для чего этот тип.

Для описания типа пропсов компонента:
```tsx
type SomeComponentsTypes = {}
```

Для параметров функции:
```tsx
type SomeExternalFunctionParams = {}
```

Для результата вызова функции:
```tsx
type SomeFunctionCallResult = {}
```
