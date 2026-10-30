const formulario = document.getElementById('form');
const colecao = document.getElementById('colecao');

// Verifica se já existem dados no LocalStorage
let galeria = JSON.parse(localStorage.getItem('galeria')) || [];

// Função para criar os cards
function criarCard(receita) {
    const card = `
        <div class="card">
            <h3>${receita.titulo}</h3>
            <p><strong> Tempo de Preparo: </strong>${receita.tempo}</p>
            <p><strong> Ingredientes:<br> </strong>${receita.ingredientes}</p>
            <p><strong> Modo de Preparo:<br> </strong>${receita.modo}</p>
            <img src="${receita.imagem}">
        </div>
    `;

    colecao.innerHTML += card;
}

// Mostra os dados salvos quando a página abre
galeria.forEach(receita => {
    criarCard(receita);
});

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const novo = {
        titulo: document.getElementById('titulo').value,
        ingredientes: document.getElementById('ingredientes').value,
        modo: document.getElementById('modo').value,
        tempo: document.getElementById('tempo').value,
        imagem: document.getElementById('link').value,
    };

    // Adiciona o novo objeto ao array
    galeria.push(novo);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const novaReceita = new Receita (t, desc, img, alt);

    fetch('/api/lista', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(novaReceita)

    })
    .then(() =>{
        window.location.href - 'index.html';
    });
});

    // Salva no LocalStorage
  