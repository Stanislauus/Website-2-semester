document.addEventListener('DOMContentLoaded', function() {
    // Получаем родительский контейнер для групп блоков
    var blocksContainer = document.querySelector('.blocks');

    // Получаем все группы блоков
    var blockGroups = document.querySelectorAll('.block-group');

    // Скрываем все группы блоков, кроме первой
    for (var i = 1; i < blockGroups.length; i++) {
        blockGroups[i].style.display = 'none';
    }

    // Инициализируем переменную для отслеживания текущей группы
    var currentGroup = 0;

    // Функция для переключения групп блоков
    function switchBlockGroups() {
        // Скрываем текущую группу
        blockGroups[currentGroup].style.display = 'none';

        // Переходим к следующей группе
        currentGroup = (currentGroup + 1) % blockGroups.length;

        // Показываем следующую группу
        blockGroups[currentGroup].style.display = 'flex';
    }

    // Переключаем группы блоков каждые 5 секунд
    setInterval(switchBlockGroups, 5000);
});