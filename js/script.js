function mostrarApenasHome (homeId, loginId, cadastroId) {
    document.getElementById(homeId).classList.replace("oculto","show");
    document.getElementById(loginId).classList.replace("show", "oculto");
    document.getElementById(cadastroId).classList.replace("show", "oculto");
}

function mostrarApenasLogin (homeId, loginId, cadastroId) {
    document.getElementById(homeId).classList.replace("show", "oculto");
    document.getElementById(loginId).classList.replace("oculto","show");
    document.getElementById(cadastroId).classList.replace("show", "oculto");
}

function mostrarApenasConta (homeId, loginId, cadastroId) {
    document.getElementById(homeId).classList.replace("show", "oculto");
    document.getElementById(loginId).classList.replace("show", "oculto");
    document.getElementById(cadastroId).classList.replace("oculto","show");
}

function checarFormValido () {
    const campo1 = document.getElementById("login-email");
    const campo2 = document.getElementById("login-password");

    if (campo1 !== "" & campo2 !== "") {
        document.getElementById("botaoLogin").classList.replace("oculto", "show-flex");
    } else {
        document.getElementById("botaoLogin").classList.replace("show-flex", "oculto");
    }
}