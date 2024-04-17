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