/*validar login*/
var form = document.getElementById('formularioLogin');
form.onsubmit = function (e) {
  e.preventDefault();
  var mensaje = document.getElementById("mensaje");
  mensaje.innerHTML = 'Cargando..espere porfavor';
  mensaje.style.display = "block";

  var emailElement = document.getElementById("email");
  var passwordElement = document.getElementById("password");
  var email = emailElement.value;
  var password = passwordElement.value;
  

  if (email != "" && password != "") {
    axios.post('http://192.168.1.217:3000/api/v1/users/login', {
      email: email,
      password: password,
     
    })
      .then(function (res) {
        if (res.status == 200) {
            mensaje.innerHTML = 'Has logeado correctamente, Entrando.. administración de *Eventos*.';
            localStorage.setItem('token', res.data.token);
        }
        
      })
      .catch(function (err) {
        mensaje.innerHTML = 'Error "No se puede autenticar"';
        console.log(err);
      })
  }
}

