// Barra de progresso superior
window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// Simulador de Impacto Sustentável
function calcularImpacto() {
    const kg = document.getElementById('alimentoRange').value;
    document.getElementById('kgValor').innerText = kg;

    // Estimativa: 1kg local poupa 50L de água e 150g de CO2 (transporte)
    const agua = kg * 50;
    const co2 = kg * 150;

    document.getElementById('aguaSalva').innerText = agua + "L";
    document.getElementById('co2Salvo').innerText = co2 + "g";
}

// Acessibilidade: Modo Eco (Cores Escuras)
function toggleEcoMode() {
    document.body.classList.toggle('eco-mode');
    const icon = document.querySelector('.eco-btn-wrapper i');
    if(document.body.classList.contains('eco-mode')){
        icon.classList.replace('fa-leaf', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-leaf');
    }
}

// Acessibilidade: Tamanho da Fonte
function changeFontSize(action) {
    const body = document.body;
    let currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    
    if (action === 'increase') {
        body.style.fontSize = (currentSize + 2) + 'px';
    } else {
        body.style.fontSize = (currentSize - 2) + 'px';
    }
}
