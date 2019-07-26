$(document).ready(function () {
    LoadInstitution();
});

var dateuser = localStorage.getItem("keyuser");
alert("usuario: " + dateuser);

function LoadInstitution() {
    console.log("mostrar");
    $.ajax({
        url: "http://192.168.32.104:59461/Api/Classroom/ShowInstitution",
        method: "POST",
        dataType: "json",
        data: JSON.stringify(oModel),
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $("#institucionId").append("<option value=" + data[i].id + ">" + data[i].nombre + "</option>");
            }
        },
        error: function (jqXHR, status, error) {
            alert('Disculpe, existió un problema');
        }
    });
}