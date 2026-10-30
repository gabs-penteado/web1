const container = document.querySelector('.todosCards');

fetch('/api/lista')
    .then((resposta) => resposta.json())
    .then((dados) => {
        container.innerHTML = ''; 

        dados.forEach(receita => {
            container.innerHTML += `
                <div class = "card">
                    <div class = "texto">
                        <h3 id="titulo">${receita.titulo}</h3>
                        <p>${receita.descricao}</p>
                    </div>
                    <div class = "img">
                        <img src="${receita.imagem}" alt="${receita.descImagem}">
                    </div>
                </div>
            `;
        });
    })
    .catch((erro) => console.error("Erro ao buscar as receitas:", erro));
