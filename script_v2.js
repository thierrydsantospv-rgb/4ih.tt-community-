// Som de clique
const clickSound = new Audio('https://freesound.org/data/previews/256/256113_3263906-lq.mp3');
clickSound.volume = 0.2;

// Adiciona evento em todos os botões
document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', () => {
        try {
            clickSound.currentTime = 0;
            clickSound.play().catch(err => {
                console.warn("Navegador bloqueou o som de clique:", err);
            });
        } catch (error) {
            console.error("Erro ao tentar reproduzir o som:", error);
        }

        console.log(`Você clicou no link: ${button.textContent.trim()}`);
    });
});
