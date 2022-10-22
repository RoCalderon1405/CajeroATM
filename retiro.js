var cuentas = [
    { nombre: "Mali", saldo: 200},
    { nombre: "Gera", saldo: 290},
    { nombre: "Maui", saldo: 67}
]


// Validamos la identificación del usuario
const confirmacionMali = () => {
    result = window.confirm('¿Eres Mali?')
    if(result) {
        inputPassMali()
    } else {
        alert('No mms no mienta qlo')
    }
}

const confirmacionGera = () => {
    result = window.confirm('¿Eres Gera?')
    if(result) {
        alert('ingresa contraseña')
    } else {
        alert('No mms no mienta qlo')
    }
}
const confirmacionMaui = () => {
    result = window.confirm('¿Eres Maui?')
    if(result) {
        alert('ingresa contraseña')
    } else {
        alert('No mms no mienta qlo')
    }
}



// Al validar la identificación creamos input para contraseña y posteriormente validamos contraseña

const inputPassMali = () => {
    const input = document.createElement("input")
    input.type = "text"
    
}