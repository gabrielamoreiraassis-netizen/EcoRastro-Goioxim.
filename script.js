function buscarRastro() {
    const input = document.getElementById('loteInput').value;
    const resultado = document.getElementById('resultadoRastro');

    if (input.trim() === "") {
        alert("Por favor, digite um código de lote ou nome de produto!");
        return;
    }

    // Simula o carregamento dos dados
    resultado.classList.add('hidden');
    
    setTimeout(() => {
        resultado.classList.remove('hidden');
        resultado.style.animation = "fadeIn 0.8s ease-in";
    }, 500);
}

// Animação simples de entrada
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
