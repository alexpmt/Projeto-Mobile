<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard do Aluno</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Dashboard do Aluno</h1>
        <nav>
            <ul>
                <li><a href="#atividades">Atividades</a></li>
                <li><a href="#upload">Enviar Respostas</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="atividades">
            <h2>Atividades</h2>
            <div class="atividade">
                <h3>Atividade 1</h3>
                <p>Descrição da atividade 1.</p>
            </div>
            <div class="atividade">
                <h3>Atividade 2</h3>
                <p>Descrição da atividade 2.</p>
            </div>
            <!-- Adicione mais atividades conforme necessário -->
        </section>
        <section id="upload">
            <h2>Enviar Respostas</h2>
            <form>
                <label for="atividade-select">Escolha a atividade:</label>
                <select id="atividade-select">
                    <option value="atividade1">Atividade 1</option>
                    <option value="atividade2">Atividade 2</option>
                    <!-- Adicione mais opções conforme necessário -->
                </select>
                <label for="file-upload">Upload de foto:</label>
                <input type="file" id="file-upload" name="file-upload">
                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Agenda Virtual</p>
    </footer>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 10px 0;
    text-align: center;
}

header h1 {
    margin: 0;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

nav ul li {
    display: inline;
    margin-right: 10px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

main {
    padding: 20px;
}

section {
    margin-bottom: 20px;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

section h2 {
    margin-top: 0;
}

.atividade {
    margin-bottom: 15px;
}

footer {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}
