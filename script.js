<><head>
    <meta charset="UTF-8">
        <title>Receitas Doce Delicia</title>

        <style>
            body{font - family}: Arial, sans-serif;
            background-color: #63451f;
            {"}"}

            header{background - color}: #8b5e3c;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 30px;
            {"}"}

            .formulario form{display}: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-top: 30px;
            {"}"}

            input, textarea{margin}: 5px;
            padding: 8px;
            width: 250px;
            {"}"}

            button{margin - top}: 10px;
            padding: 10px;
            background-color: #8b5e3c;
            color: white;
            border: none;
            cursor: pointer;
            {"}"}
        </style>
    </></head><body>

        <header>
            Receitas Doce Delicia
        </header>

        <div class="formulario">
            <h2 class="titulo">Cadastrar Receita</h2>

            <form id="meuFormulario">
                <label for="titulo">Nome da Receita</label>
                <input type="text" id="titulo" placeholder="Ex: Bolo de Chocolate" required>

                    <label for="imagem">Imagem do Bolo</label>
                    <input type="url" id="imagem" placeholder="URL da imagem" required>

                        <label for="paragrafo">Modo de preparo</label>
                        <textarea id="paragrafo" placeholder="Descreva a receita..." required></textarea>

                        <button type="submit">Adicionar</button>
                    </form>
                </div>

                <script>
                    const formulario = document.getElementById('meuFormulario');

                    formulario.addEventListener('submit', function(evento) {evento.preventDefault()};

                    const tituloD = document.getElementById('titulo').value;
                    const imagemD = document.getElementById('imagem').value;
                    const paragrafoD = document.getElementById('paragrafo').value;

                    const novaReceita = {titulo}: tituloD,
                    imagem: imagemD,
                    paragrafo: paragrafoD
                    

                    // Pega lista salva ou cria uma nova
                    let cardSalvos = JSON.parse(sessionStorage.getItem('lista')) || [];

                    cardSalvos.push(novaReceita);

                    sessionStorage.setItem('lista', JSON.stringify(cardSalvos));

                    alert('Receita cadastrada com sucesso!');

                    formulario.reset();
                    
                </script>

            </body>

        </></></>
