const inviteScreen = document.getElementById('invite-screen');
const paymentScreen = document.getElementById('payment-screen');
const finalScreen = document.getElementById('final-screen');

const yesBtn = document.getElementById('yesButton');
const noBtn = document.getElementById('noButton');
const mePayBtn = document.getElementById('mePayButton');
const youPayBtn = document.getElementById('youPayButton');

function runAway(btn) {
    const x = Math.random() * (window.innerWidth - btn.offsetWidth - 40) + 20;
    const y = Math.random() * (window.innerHeight - btn.offsetHeight - 40) + 20;
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

noBtn.addEventListener('mouseover', () => runAway(noBtn));
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); runAway(noBtn); });

youPayBtn.addEventListener('mouseover', () => runAway(youPayBtn));
youPayBtn.addEventListener('touchstart', (e) => { e.preventDefault(); runAway(youPayBtn); });

yesBtn.addEventListener('click', () => {
    inviteScreen.classList.add('hidden');
    paymentScreen.classList.remove('hidden');
});

mePayBtn.addEventListener('click', () => {
    paymentScreen.classList.add('hidden');
    finalScreen.classList.remove('hidden');
});
