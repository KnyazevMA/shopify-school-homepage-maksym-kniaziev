- Запуск проекту локально:

• Клонуйте репозиторій:
    git clone https://github.com/KnyazevMA/shopify-school-homepage-maksym-kniaziev.git
    cd <shopify-school-homepage-maksym-kniaziev>
• Встановіть залежності:
    npm install
• Запустіть проект у режимі dev:
    npm run dev

Якщо у вас GitHub Desctope:

• У верхньому меню натисніть File → Clone repository....
• Вкладка URL → вставте посилання на ваш репозиторій, https://github.com/KnyazevMA/shopify-school-homepage-maksym-kniaziev.git
• Виберіть папку на комп'ютері, куди хочете скопіювати проект.
• Натисніть Clone.
• Відкрий папку проекту в VS Code або будь-якому редакторі.
• У терміналі (всередині цієї папки) встанови залежності:
 npm install
• Запустіть проєкт у режимі розробки:
 npm run dev
• У консолі з'явиться посилання виду:
 http://localhost:5173/


- Технології

• HTML5, CSS3/SCSS (методологія БЕМ)
• JavaScript (ES6+)
• Vite - для збірки
• Swiper.js - для слайдерів
• LocalStorage - для імітації кошика
• GitHub Pages - деплой

- Що можна поліпшити
Якби було більше часу, я б додав:

• Повноцінний кошик із підрахунком товарів (збереження в LocalStorage).
• Фейкове API (наприклад, через json-server) для емуляції даних про товари.
• Складніші анімації (плавні переходи, skeleton loading).
• Додати валідацію: помилки під полями (email - неправильний формат, порожнє поле - червона рамка).
• Lazy-load для зображень внизу сторінки (loading="lazy").


