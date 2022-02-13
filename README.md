# Базовый шаблон для создания компонентов

## Настройка "под себя"
Заменить все слова в конфигах и package.json "base-vue-npm-package" 
на название вашего пакета. Не забудьте сбросить версию пакета в package.json на 0.1.0

## Порядок команд 
1. Разработка - npm run serve
2. Сборка библиотеки - npm run build
   2.1. Коммитим - git commit - m "commit"
   2.2. Отправляем изменения в репозиторий - git push
3. Сборка демо проекта - npm run predeploy
4. Публикация ветки gh-pages - npm run deploy
5. Публикация пакета на npmjs -  npm publish (предварительно npm login)
