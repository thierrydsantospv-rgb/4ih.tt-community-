// ===============================
//  LONG BIO — API CALL
// ===============================

async function updateBio() {
    const token = document.getElementById("tokenBio").value.trim();
    const bio = document.getElementById("newBio").value.trim();
    const result = document.getElementById("result-bio");

    if (!token || !bio) {
        result.innerHTML = "❌ Preencha todos os campos.";
        return;
    }

    result.innerHTML = "⏳ Processando...";

    try {
        const url = `https://bio.thug4ff.com/update_bio?access_token=${token}&bio=${encodeURIComponent(bio)}&key=nexx`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
            result.innerHTML = "✅ BIO atualizada com sucesso!";
        } else if (data.error) {
            result.innerHTML = "❌ Token inválido.";
        } else {
            result.innerHTML = "⚠️ Erro inesperado.";
        }

    } catch (error) {
        result.innerHTML = "❌ Falha na conexão.";
    }
}


// ===============================
//  REMOVE FRIENDS — API CALL
// ===============================

async function removeFriends() {
    const token = document.getElementById("tokenRemove").value.trim();
    const result = document.getElementById("result-remove");

    if (!token) {
        result.innerHTML = "❌ Insira o token.";
        return;
    }

    result.innerHTML = "⏳ Iniciando remoção...";

    try {
        const url = `https://controle.thug4ff.com/remove_all?access_token=${token}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
            result.innerHTML = "🗑️ Amigos removidos com sucesso!";
        } else if (data.error) {
            result.innerHTML = "❌ Token inválido.";
        } else {
            result.innerHTML = "⚠️ Erro inesperado.";
        }

    } catch (error) {
        result.innerHTML = "❌ Falha na conexão.";
    }
}
