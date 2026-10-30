// Classe ObraDeArte com a ordem exata dos atributos
class Receita {
    constructor(titulo, descricao, imagem, descImagem) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.descImagem = descImagem;
    }
}

/************************************************************/

const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const tituloF = document.getElementById('titulo').value;
    const imagemF = document.getElementById('imagem').value;
    const descricaoImF = document.getElementById('descricao').value;
    const textoF = document.getElementById('paragrafo').value;

   
    const novaReceita = new Receita(tituloF, textoF, imagemF, descricaoImF);

    // Dispara a requisição POST para a API
    fetch('/api/lista', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaReceita)
    })
    .then(resposta => resposta.json())
    .then(() => {
        alert('Receita enviada com sucesso!');
        formulario.reset();
        window.location.href = 'index.html'; 
    })
    .catch(erro => console.error("Erro ao enviar:", erro));
});
