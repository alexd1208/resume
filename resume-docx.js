// Альтернативная функция для создания Word документа
function downloadResume() {
    // HTML-контент для преобразования в Word
    const htmlContent = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' 
              xmlns:w='urn:schemas-microsoft-com:office:word' 
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
            <meta charset="utf-8">
            <title>Резюме - Дуля Александр</title>
            <style>
                body { font-family: Arial, sans-serif; }
                h1 { color: #2E74B5; font-size: 16pt; }
                h2 { color: #2E74B5; font-size: 14pt; }
                h3 { color: #1F4E79; font-size: 12pt; }
                .section { margin-bottom: 20px; }
            </style>
        </head>
        <body>
            <h1 align="center">Резюме</h1>
            <h2 align="center">Дуля Александр</h2>
            <p align="center"><strong>IT-инженер технической поддержки</strong></p>
            
            <div class="section">
                <h3>Контактная информация:</h3>
                <ul>
                    <li>Email: alexhh1208@mail.ru</li>
                    <li>Телефон: +7 (906) 155-78-38</li>
                    <li>Местоположение: Саратов, Россия</li>
                </ul>
            </div>
            
            <div class="section">
                <h3>Обо мне:</h3>
                <p>IT-инженер технической поддержки. Специализируюсь на оперативном решении инцидентов, удаленном администрировании и настройке пользовательского оборудования и ПО. Также имею опыт работы в ОКК.</p>
                <p>Участвовал в проектах по разработке сайтов для физ. и юр. лиц с использованием HTML, CSS, JavaScript. Базовые знания работы с терминалом Linux. Имею обширный опыт работы с ИИ инструментами.</p>
            </div>
            
            <div class="section">
                <h3>Опыт работы:</h3>
                <p><strong>2021 - 2023: Специалист технической поддержки в ТФН-Нижний Новгород</strong></p>
                <p>Поддержка пользователей автомобильной охранной системы Scher-Khan. Удалённая диагностика автомобильных систем, решение 90% проблем по инструкциям. Поиск и устранение ошибок с удаленным подключением. Работа в системе Bitrix24. Сбор данных и эскалация на инженеров 2 линии. Последние 3 месяца работал в должности специалиста ОКК.</p>
                
                <p><strong>2024 - 2025: Специалист отдела контроля качества в Яндекс Команда для бизнеса</strong></p>
                <p>Проверка соблюдения стандартов предоставления услуг менеджеров по продажам(Подразделение Яндекс GO для Бизнеса). Оценка записей звонков по чек-листу. Анализ 50+ звонков еженедельно, улучшение скриптов  для менеджеров. Работа во внутренней СRM и сопутствующих программах. Составление и внедрение чек-листов. Помощь в написании скриптов продаж. Работа с таблицами(Googlе, Excel). Работа в нестандартных проверках. Аналитика результатов проверок. Предоставление отчетности с ОС.</p>
                
                <p><strong>2025 - по настоящее время: IT-Инженер технической поддержки в Zerobit</strong></p>
                <p>Решение инцидентов посредством удалённого администрирования, установка и настройка программного обеспечения, диагностика ПК, настройка сетевых подключений, настройка оборудования (МФУ, телефон, кассовое оборудование), технические консультации.
Сбор данных, классификация и эскалация инцидентов на ответственные группы. Сбор и анализ логов. Фиксация и устранение сбоев при работе в корпоративном рабочем ПО (MS Office, SAP-системы, Active Directory (AD), внутренние порталы, системы мониторинга, самописное ПО, корпоративные бизнес-системы и др.). Решение более 1000 инцидентов ежемесячно через удалённое администрирование (Windows, корпоративное ПО).</p>
            </div>
            
            <div class="section">
                <h3>Навыки:</h3>
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>Linux</li>
                    <li>Настройка оборудования </li>
                    <li>Самообучение и адаптивность</li>
                    <li>Инструменты ИИ</li>
                    <li>Работа с инцидентами</li>
                    <li>Мультизадачность</li>
                    <li>Коммуникативные навыки</li>
                    <li>SAP\Active Directory - администрирование</li>
                    <li>Настройка API</li>
                    <li>Работа с оргтехникой</li>
                    <li>Диагностика ПК</li>
                </ul>
            </div>
            
            <div class="section">
                <h3>Портфолио:</h3>
                <ul>
                    <li>Корпоративный сайт: https://alexd1208.github.io/urcon/</li>
                    <li>Веб-приложение: https://alexd1208.github.io/prognoz/</li>
                    <li>Справочник: https://alexd1208.github.io/-/</li>
                </ul>
            </div>
            
            <div class="section">
                <h3>Социальные сети:</h3>
                <ul>
                    <li>VK: https://vk.com/alex1208_du</li>
                    <li>Telegram: https://t.me/Alex64_O</li>
                    <li>GitHub: https://github.com/alexd1208</li>
                </ul>
            </div>
        </body>
        </html>
    `;
    
    // Создаем Blob из HTML контента
    const blob = new Blob([htmlContent], { type: 'application/msword' });
    
    // Создаем ссылку для скачивания
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Резюме_Дуля_Александр.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Добавляем обработчик события
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('download-cv');
    if (downloadButton) {
        downloadButton.addEventListener('click', function(e) {
            e.preventDefault();
            downloadResume();
        });
    }
});