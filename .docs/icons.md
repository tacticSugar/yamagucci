# Иконки
**Сохранение**
1) Храним иконки в svg в их первоначальном виде из фигмы. Сохраняем в папке public/assets/...
2) При сохранении файла необходимо удалить атрибут fill из svg
3) После добавляем и экспортируем иконку в src/constants/icons.ts с неймингом Icon**. Называем иконки по тому, что на них нарисовано, а не для чего они используются, например IconEyeCrossed а не IconNotVisible

**Трансформирование иконок из svg в tsx**
Для упрощенной конвертации svg в tsx используем инструмент https://react-svgr.com/docs/next/

