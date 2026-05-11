// SIMULADOR DE IMPACTO
function calcularImpacto() {
    const kg = document.getElementById('alimentoRange').value;
    document.getElementById('kgValor').innerText = kg;

    // Lógica fictícia baseada em dados de sustentabilidade
    const agua = kg * 50; // 50 litros por kg economizado
    const co2 = kg * 120; // 120g de CO2 a menos (transporte local)

    document.getElementById('aguaSalva').innerText = agua + "L";
    document.getElementById('co2Salvo').innerText = co2 + "g";

    const msg = document.getElementById('msgImpacto');
    if(kg > 40) msg.innerText = "Nível Guardião de Goioxim! 🌱";
    else if(kg > 20) msg.innerText = "Herói do Consumo Local! 🍎";
    else if(kg > 0) msg.innerText = "Iniciando sua jornada ODS!";
}

// MODO ECO
function toggleEcoMode() {
    document.body.classList.toggle('eco-mode');
    const icon = document.querySelector('.eco-toggle i');
    if(document.body.classList.contains('eco-mode')) {
        icon.classList.replace('fa-leaf', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-leaf');
    }
}

// ANIMAÇÃO DE RASTREIO
function animarRastro() {
    const timeline = document.getElementById('timeline');
    const txt = document.getElementById('detalheTxt');
    
    timeline.classList.remove('hidden');
    txt.innerText = "Buscando dados no Sítio Pinhalzinho...";
    
    setTimeout(() => {
        txt.innerText = "Produto Identificado: Morango Orgânico. Colhido há 4h em Goioxim. Destino: Colégio Dr. João Ferreira Neves.";
    }, 1500);
}
