// Abrir modal
function openModal(type) {
    document.getElementById(`modal-${type}`).style.display = "flex";
}

// Fechar modal
function closeModal(type) {
    document.getElementById(`modal-${type}`).style.display = "none";
}



// === LONG BIO ===
async function updateBio() {
    const token = document.getElementById("bioToken").value;
    const bio = document.getElementById("bioText").value;
    const status = document.getElementById("bioStatus");

    status.textContent = "⏳ Processando...";

    try {
        const res = await fetch(
            `https://bio.thug4ff.com/update_bio?access_token=${token}&bio=${bio}&key=nexx`
        );

        const txt = await res.text();

        if (txt.includes("success")) {
            status.textContent = "✅ BIO atualizada com sucesso!";
        } else if (txt.includes("invalid")) {
            status.textContent = "❌ Token inválido!";
        } else {
            status.textContent = "⚠ Erro inesperado!";
        }

    } catch {
        status.textContent = "⚠ Erro ao conectar com servidor!";
    }
}



// === REMOVE ALL FRIENDS ===
async function removeFriends() {
    const token = document.getElementById("removeToken").value;
    const status = document.getElementById("removeStatus");

    status.textContent = "⏳ Processando...";

    try {
        const res = await fetch(
            `https://controle.thug4ff.com/remove_all?access_token=${token}`
        );

        const txt = await res.text();

        if (txt.includes("success")) {
            status.textContent = "✅ Amigos removidos!";
        } else if (txt.includes("invalid")) {
            status.textContent = "❌ Token inválido!";
        } else {
            status.textContent = "⚠ Erro inesperado!";
        }

    } catch {
        status.textContent = "⚠ Erro ao conectar com servidor!";
    }
}
