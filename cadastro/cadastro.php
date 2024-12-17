<?php
// Configuração do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "featmap";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Obter os dados do formulário
$nome = $_POST["nome"];
$email = $_POST["email"];
$senha = $_POST["senha"]; // Senha sem hash

// Inserir os dados no banco
$sql = "INSERT INTO user (nome, email, senha) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nome, $email, $senha);

if ($stmt->execute()) {
    header("Location: ../index.html");
    exit();
} else {
    echo "Erro no cadastro: " . $stmt->error;
}

// Fecha a conexão
$stmt->close();
$conn->close();
?>
