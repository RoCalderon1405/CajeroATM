var cuentas = [
    { nombre: "Mali", saldo: 200, password: "123" },
    { nombre: "Gera", saldo: 290, password: "234" },
    { nombre: "Maui", saldo: 67, password: "456" }
]

const getValueInput = () => {
    let valueName = document.getElementById('inputUser').value;
    let valuePassword = document.getElementById('inputPassword').value;

    llevarAInicio(valueName, valuePassword)

    document.getElementById('inputUser').value = ''
    document.getElementById('inputPassword').value = ''
}

const llevarAInicio = (valueName, valuePassword) => {
    let contador = 0
    for (i = 0; i < cuentas.length; i++) {

        if (valueName === cuentas[i].nombre && valuePassword === cuentas[i].password) {
            getUsuario = cuentas[i]
            user(getUsuario)

            // window.location.href = "inicio.html"
        } else {
            contador++
        }
    }

    if (!valueName || !valuePassword) {
        alert('Llena todos los campos')
    } else {
        if (contador === 3) {
            alert('Usuario o contraseña incorrectos')
        }
    }

}

const user = (usuario) => {
    usuarioGlobal = usuario
    console.log(usuarioGlobal)
}

<script type="text/javascript">
        var varGlobal = getUsuario;
    </script>