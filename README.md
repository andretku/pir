## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Развертывание (Deployment)

Проект настроен для работы с прямыми ссылками (SPA routing). В проекте уже включены конфигурационные файлы для различных платформ:

### Netlify
Файл `public/_redirects` автоматически обрабатывает все маршруты.

### Vercel
Файл `vercel.json` настроен для автоматического редиректа на `index.html`.

### Apache
Файл `public/.htaccess` настроен для работы с mod_rewrite.

### Nginx
Используйте `nginx.conf.example` как пример конфигурации. Скопируйте его в конфигурацию вашего сервера и настройте `server_name` и `root`.

### Development
В режиме разработки fallback настроен автоматически через плагин `spaFallback` в `vite.config.ts`.
