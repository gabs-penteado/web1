class Receita{ 
    constructor(titulo, descricao, imagem, descImagem){
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.descImagem = descImagem;
    } 


}

const container = document.querySelector('.todosCards');
//console.log(container);

fetch('/api/lista')
    .then((data)=> data.json())
    .then((json)=> {
        json.forEach(Receitas => {
            container.innerHTML += `
            <div class="card">
            <h3>${Receitas.titulo}</h3>
            <p><strong> Tempo de Preparo: </strong>${Receitas.tempo}</p>
            <p><strong> Ingredientes:<br> </strong>${Receitas.ingredientes}</p>
            <p><strong> Modo de Preparo:<br> </strong>${Receitas.modo}</p>
            <img src="${Receitas.imagem}">
        </div>
    `;
    }))
    .catch((err)=>console.log(err));

//var teste1 = new Receita("titulo teste", "descricao teste", "imagem teste", "descImagem teste")