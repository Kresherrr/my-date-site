// Елементи екранів
const inviteScreen = document.getElementById('invite-screen');
const paymentScreen = document.getElementById('payment-screen');
const finalScreen = document.getElementById('final-screen');

// Кнопки
const yesBtn = document.getElementById('yesButton');
const noBtn = document.getElementById('noButton');
const mePayBtn = document.getElementById('mePayButton');
const youPayBtn = document.getElementById('youPayButton');

// Загальна функція для руху кнопок
function makeButtonRun(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth - 100) + 50;
    const y = Math.random() * (window.innerHeight - button.offsetHeight - 100) + 50;

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Події для кнопки "Нє("
noBtn.addEventListener('mouseover', () => makeButtonRun(noBtn));
noBtn.addEventListener('click', () => makeButtonRun(noBtn)); // На випадок кліку на телефоні

// Події для кнопки "Ти!" (теж тікає)
youPayBtn.addEventListener('mouseover', () => makeButtonRun(youPayBtn));
youPayBtn.addEventListener('click', () => makeButtonRun(youPayBtn));

// Перехід 1: Натиснули "Даа!" -> показуємо екран оплати
yesBtn.addEventListener('click', () => {
    inviteScreen.classList.add('hidden'); // Ховаємо перший екран
    paymentScreen.classList.remove('hidden'); // Показуємо другий екран
    
    // Встановлюємо початкову позицію для кнопки "Ти!", щоб вона була поруч
    youPayBtn.style.position = 'static'; 
    setTimeout(() => {
        youPayBtn.style.position = 'fixed'; // Повертаємо fixed після відображення
    }, 100);
});

// Перехід 2: Натиснули "Звичайно я!" -> фінал
mePayBtn.addEventListener('click', () => {
    paymentScreen.classList.add('hidden'); // Ховаємо екран оплати
    finalScreen.classList.remove('hidden'); // Показуємо фінальний екран
});