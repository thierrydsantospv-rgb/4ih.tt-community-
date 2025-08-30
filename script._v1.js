// Música ambiente
const bgMusic = new Audio('https://cdn.pixabay.com/download/audio/2021/11/02/audio_29bb317b8c.mp3?filename=lofi-chill-11343.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3;
bgMusic.muted = true;

// Som de clique
const clickSound = new Audio('https://freesound.org/data/previews/256/256113_3263906-lq.mp3');
clickSound.volume = 0.2;

// Função para tocar o som de clique
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play().catch(err => {
        console.warn("Não foi possível tocar o som de clique:", err);
    });
}

// Função para iniciar música de fundo
function startBackgroundMusic() {
    if (bgMusic.muted) {
        bgMusic.muted = false;
        bgMusic.play().catch(err => {
            console.warn("Não foi possível iniciar a música de fundo:", err);
        });
    }
}

// Adiciona eventos aos botões
document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', () => {
        playClickSound();
        startBackgroundMusic();
        console.log(`Você clicou no link: ${button.textContent.trim()}`);
    });
});
