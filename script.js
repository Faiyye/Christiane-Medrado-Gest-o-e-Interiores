// Exibe o campo de texto "Outro" quando "Outro" é selecionado na localização
document.getElementById('localizacao').addEventListener('change', function() {
    var localizacaoOutroField = document.getElementById('localizacaoOutroField');
    if (this.value === 'outro') {
        localizacaoOutroField.style.display = 'block';
    } else {
        localizacaoOutroField.style.display = 'none';
    }
});

function sendToWhatsapp() {
    // Coleta os valores do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var comoConheceu = document.getElementById('comoConheceu').value;
    var perfilRedes = document.getElementById('perfilRedes').value;
    var planejamento = document.getElementById('planejamento').value;
    var situacaoImovel = document.getElementById('situacaoImovel').value;
    var localizacao = document.getElementById('localizacao').value;
    
    // Verifica se o campo "Outro" da localização foi preenchido
    var localizacaoOutro = (localizacao === 'outro') ? document.getElementById('localizacaoOutro').value : localizacao;

    var endereco = document.getElementById('endereco').value;
    var previsaoChaves = document.getElementById('previsaoChaves').value;
    var metragem = document.getElementById('metragem').value;
    var pressa = document.getElementById('pressa').value;
    var metodoObra = document.getElementById('metodoObra').value;
    var arquitetura = document.getElementById('arquitetura').value;
    var psicologia = document.getElementById('psicologia').value;
    var motivacao = document.getElementById('motivacao').value;

    // Verifica se "Outro" foi selecionado em "O que está planejando" e pega o valor de "outro2"
    var planejamentoOutro = (planejamento === 'outro2') ? document.getElementById('outro2').value : '';
    // Verifica se "Outro" foi selecionado em "Como nos conheceu" e pega o valor de "outro"
    var comoConheceuOutro = (comoConheceu === 'outro') ? document.getElementById('outro').value : '';

    // Verifica se o campo "outro2" foi preenchido e cria o link com o valor adequado
    var textoWhatsapp = "Olá, meu nome é " + nome + ". Eu vi seu site e gostaria de saber mais. Aqui estão os detalhes:\n\n";
    textoWhatsapp += "*E-mail*: " + email + "\n";
    textoWhatsapp += "*Celular/WhatsApp*: " + telefone + "\n";
    textoWhatsapp += "*Por onde nos conheceu*: " + (comoConheceuOutro ? "outro - " + comoConheceuOutro : comoConheceu) + "\n";
    textoWhatsapp += "*O que está planejando*: " + (planejamentoOutro ? "outro2 - " + planejamentoOutro : planejamento) + "\n";
    textoWhatsapp += "*Perfil de redes sociais*: " + perfilRedes + "\n";
    textoWhatsapp += "*Situação do imóvel*: " + situacaoImovel + "\n";
    textoWhatsapp += "*Localização*: " + localizacaoOutro + "\n";  // Aqui usa o valor do campo "Outro" se for o caso
    textoWhatsapp += "*Endereço*: " + endereco + "\n";
    textoWhatsapp += "*Previsão de recebimento das chaves*: " + previsaoChaves + "\n";
    textoWhatsapp += "*Metragem do imóvel*: " + metragem + " m²\n";
    textoWhatsapp += "*Tem pressa para se mudar*: " + pressa + "\n";
    textoWhatsapp += "*Pretensão de obra*: " + metodoObra + "\n";
    textoWhatsapp += "*Já contratou serviços de arquitetura*: " + arquitetura + "\n";
    textoWhatsapp += "*Conhecimento sobre Psicologia aplicada*: " + psicologia + "\n";
    textoWhatsapp += "*Motivo de interesse*: " + motivacao;

    // Codifica o texto para o formato de URL
    textoWhatsapp = encodeURIComponent(textoWhatsapp);

    // Redireciona para o WhatsApp com o texto
    var whatsappLink = "https://wa.me/5575988517374?text=" + textoWhatsapp;  // Substitua pelo número de telefone correto
    window.open(whatsappLink, '_blank');
    return false;  // Previne o envio normal do formulário
}

// Exibe o campo de texto "Outro" quando "Outro" é selecionado
document.getElementById('comoConheceu').addEventListener('change', function() {
    var outroField = document.getElementById('outroField');
    if (this.value === 'outro') {
        outroField.style.display = 'block';
    } else {
        outroField.style.display = 'none';
    }
});

// Exibe o campo de texto "Outro" quando "Outro" é selecionado em planejamento
document.getElementById('planejamento').addEventListener('change', function() {
    var outroField2 = document.getElementById('outroField2');
    if (this.value === 'outro2') {
        outroField2.style.display = 'block';
    } else {
        outroField2.style.display = 'none';
    }
});