// Добавляем немного интерактивности
document.addEventListener('DOMContentLoaded', function() {
    const workItems = document.querySelectorAll('.work-item');

    workItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.backgroundColor = '#f8f9fa';
            setTimeout(() => {
                this.style.backgroundColor = 'white';
            }, 300);
        });
    });

    // Дополнительная анимация при загрузке
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';

    setTimeout(() => {
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});