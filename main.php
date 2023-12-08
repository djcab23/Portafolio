$servername = "localhost";
$username = "roberto";
$password = "thecure";
$db_name = "thecure";

$conn = new mysqli($servername, $username, $password, $db_name);

if ($conn-> connect_error) {
    die("conexion fallida: ". $conn->connect_error);
}

$user = $_POST['user'];
$pass = $_POST['password'];


$sql = "SELECT * FROM users WHERE user = ? AND password = MD5(?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $user, $pass);
$stmt->execute();

$result = $stmt->get_result();
if ($result->num_rows > 0) {
    header("Location: login.html");
    exit();
} else{
    echo"Usuario o contraseña incorrectos";
}

stmt->close();
$conn->close();

?>































?>