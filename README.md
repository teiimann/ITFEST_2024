    #ITFEST 2024, team ss

## Обзор

Данный проект демонстрирует, как улучшить производительность интернет-магазина, вынеся статические изображения товаров из локального сервера в объектное хранилище S3 и раздавая их через Content Delivery Network (CDN). Это позволяет сократить время загрузки страниц для пользователей, снизить нагрузку на основной сервер и упростить обновление статического контента.

## Выполненные шаги
   Изначально все изображения товаров отдавались напрямую с виртуальной машины (Windows), что приводило к медленной загрузке, так как весь трафик проходил через один сервер. Целью стало перенести изображения в S3-хранилище и подключить CDN для ускорения их отдачи.
   - **Создание бакета:** В облачной консоли был создан новый бакет S3 
   - **Загрузка файлов:** Все изображения товаров были загружены в созданный бакет.  
   - **Настройка доступа:** Были настроены политики и/или ACL для публичного чтения объектов, чтобы CDN и конечные пользователи могли получать к ним доступ.
   - **Настройка CDN:** Создана новая дистрибуция CDN, указывающая на S3-бакет в качестве источника.  
   - **Настройка кэширования:** Установлен разумный срок жизни кэша (TTL), 24 часа, чтобы обеспечить баланс между актуальностью и эффективным кэшированием.  
   - **Оптимизация:** Отключены ненужные параметры (Set-Cookie и т.п.) и игнорирование URL-параметров для более эффективного кэширования.
   - **Домен (CNAME):** Создан CNAME-запись в DNS указывающая на CDN эндпоинт.  
   - **Обновление DNS-записей:** Настроены DNS-записи для связывания пользовательского домена с CDN.
     **Обновление фронтенда приложения**  
   - **Проверка работы:** Проверено, что изображения корректно загружаются из CDN. В инструментах разработчика виден домен CDN 

**Сравнение производительности и проверка результатов**  
   - **Тестирование локально vs. CDN:** Проведён тест для сравнения скорости загрузки с локального сервера и через CDN.  
   - **Результаты:** В реальной среде CDN позволит быстрее доставлять изображения пользователям за счёт географически распределённой сети и сниженной нагрузки на основной сервер. В локальной тестовой среде локальный ресурс может казаться быстрее из-за отсутствия сетевых задержек, но для удалённых пользователей CDN будет эффективнее.

## Достигнутые результаты

- **Снижение нагрузки на основной сервер:** Основной сервер теперь не отвечает за выдачу всех изображений, концентрируясь на динамическом контенте и логике.  
- **Ускоренная отдача изображений:** Пользователи получают изображения из CDN, что сокращает время загрузки страниц.  
- **Упрощённое управление контентом:** Менеджеры продуктов могут обновлять изображения, загружая их прямо в S3, без необходимости обновлять или заново деплоить приложение.

