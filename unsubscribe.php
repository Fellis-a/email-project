<?php
// unsubscribe.php
if (isset($_GET['email'])) {
    $email = $_GET['email'];
    // Подключение к базе данных
    $conn = new mysqli("hostname", "username", "password", "database");

    // Проверка подключения
    if ($conn->connect_error) {
        die("Ошибка подключения: " . $conn->connect_error);
    }

    // Обновление статуса подписки в базе данных
    $stmt = $conn->prepare("UPDATE subscribers SET subscribed = 0 WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->close();
    $conn->close();

    echo "Вы успешно отписались от рассылки.";
} else {
    echo "Неверный запрос.";
}
?>
