$(document).ready(function () {
    LoadCareer();
    LoadSpeciality();
});

var dateuser = localStorage.getItem("keyuser");
alert("usuario: " + dateuser);

function LoadCareer() {
    var accion;
    var error;
    var msj;

    $.ajax({
        url: "http://192.168.32.104:59461/Api/Subject/ShowCareer",
        method: "POST",
        dataType: "json",
        data: JSON.stringify(oModel),
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $("#carreraId").append("<option value=" + data[i].id + ">" + data[i].nombre + "</option>");
            }

            error = "Ninguno";
            msj = "Funcionamiento correcto";
            accion = "Obtencion de una carrera";
            Information(accion, error, msj);
        },
        error: function (jqXHR, status, error) {
            alert('Disculpe, existió un problema');

            error = err + " " + textStatus + " " + jqXHR;
            msj = "Administrador revisa el funcionamiento del portal";
            accion = "Fallo obtencion de una carrera";
            Information(accion, error, msj);
        }
    });
}

function LoadSpeciality() {
    var accion;
    var error;
    var msj;

    $.ajax({
        url: "http://192.168.32.104:59461/Api/Subject/ShowSpeciality",
        method: "POST",
        dataType: "json",
        data: JSON.stringify(oModel),
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $("#especialidadId").append("<option value=" + data[i].id + ">" + data[i].nombre + "</option>");
            }

            error = "Ninguno";
            msj = "Funcionamiento correcto";
            accion = "Obtencion de una especialidad";
            Information(accion, error, msj);
        },
        error: function (jqXHR, status, error) {
            alert('Disculpe, existió un problema');

            error = err + " " + textStatus + " " + jqXHR;
            msj = "Administrador revisa el funcionamiento del portal";
            accion = "Fallo obtencion de una especialidad";
            Information(accion, error, msj);
        }
    });
}

function Information(accion, error, msj) {
    var oModel = {
        "Accion": accion,
        "Error": error,
        "Msj": msj
    }
    $.ajax({
        "async": true,
        "crossDomain": true,
        "cache": false,
        "method": "POST",
        "url": "http://192.168.32.104:59461/Api/Binnacle/Info",
        "data": JSON.stringify(oModel),
        "contentType": "application/json"
    }).done(function (response) {
        console.log(response);
    }).fail(function (jqXHR, textStatus, err) {
        console.log(textStatus);
    });
}