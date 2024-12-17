<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configurações do banco de dados
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "featmap";

    // Conexão com o banco
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }

    // Dados do formulário
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Consulta SQL para verificar o e-mail e a senha diretamente
    $sql = "SELECT senha FROM user WHERE email = ?";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Erro na preparação da consulta: " . $conn->error);
    }

    // Bind do parâmetro
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($senha_bd);
        $stmt->fetch();

        // Verifica se a senha informada é igual à senha no banco
        if ($senha === $senha_bd) {
            echo "Login bem-sucedido!";
            // Redireciona para a página inicial
            header("Location: ../index.html");
            exit();
        } else {
            echo "Senha incorreta.";
        }
    } else {
        echo "Usuário não encontrado.";
    }

    // Fecha conexões
    $stmt->close();
    $conn->close();
}
?>
