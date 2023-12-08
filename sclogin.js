function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar credenciales (puedes cambiar esto con una llamada a tu servidor)
    if (username === "usuario" && password === "contrasena") {
        alert("Inicio de sesión exitoso");
        // Aquí puedes redirigir a otra página si el inicio de sesión es exitoso
    } else {
        alert("Error de inicio de sesión. Verifica tu usuario y contraseña.");
    }
}
