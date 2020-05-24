const URL_BACKEND = "https://5ec8650b155c130016a909e3.mockapi.io";
formAdd = document.getElementById("formAdd");
formUpdate = document.getElementById("formUpdate");
formDelete = document.getElementById("formDelete");

$(document).ready(function () {
  // Activate tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Select/Deselect checkboxes
  var checkbox = $('table tbody input[type="checkbox"]');
  $("#selectAll").click(function () {
    if (this.checked) {
      checkbox.each(function () {
        this.checked = true;
      });
    } else {
      checkbox.each(function () {
        this.checked = false;
      });
    }
  });
  checkbox.click(function () {
    if (!this.checked) {
      $("#selectAll").prop("checked", false);
    }
  });
});

//Traer los repartidores
const getRepartidores = () => {
  const dibujar = (repartidores) => {
    repartidores.forEach((repartidor) => {
      $("#tabla tbody").append(
        `<tr>
            <td>
              <span class="custom-checkbox">
                <input
                  type="checkbox"
                  id="${repartidor.id}"
                  name="options[]"
                  value="${repartidor.id}"
                />
                <label for="checkbox1"></label>
              </span>
            </td>
            <td>${repartidor.rep_nom}</td>
            <td>${repartidor.rep_ape}</td>
            <td>${repartidor.rep_dni}</td>
            <td>
                <a href="#editEmployeeModal" id="${repartidor.id}" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
          </tr>`
      );
    });

    //llenar modal editar
    $("#tabla .edit").on("click", function (e) {
      console.log(e.currentTarget.id);
      var row = $(e.currentTarget).parent().parent();
      var celdas = row.children();
      let inputNombreUpd = $(celdas[1]).text();
      let inputApellidoUpd = $(celdas[2]).text();
      let inputDniUpd = $(celdas[3]).text();

      $("#inputId").val(e.currentTarget.id);
      $("#inputNombreUpd").val(inputNombreUpd);
      $("#inputApellidoUpd").val(inputApellidoUpd);
      $("#inputDniUpd").val(inputDniUpd);
    });
  };

  let endpoint = `${URL_BACKEND}/repartidor`;
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dibujar(data);
    });
};

//Agregar Repartidor
formAdd.onsubmit = (e) => {
  e.preventDefault();
  console.log("add");
  inputNombre = document.getElementById("inputNombre").value;
  inputApellido = document.getElementById("inputApellido").value;
  inputdni = document.getElementById("inputDni").value;

  let objRepartidor = {
    rep_nom: inputNombre,
    rep_ape: inputApellido,
    rep_dni: inputdni,
  };

  console.log(objRepartidor);

  fetch(`${URL_BACKEND}/repartidor`, {
    method: "POST",
    body: JSON.stringify(objRepartidor),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    response.json().then((data) => {
      location.reload();
    });
  });

  $("#addEmployeeModal").modal("hide");
};

//Actualizar Repartidor
formUpdate.onsubmit = (e) => {
  e.preventDefault();

  let inputNombreUpd = document.getElementById("inputNombreUpd").value;
  let inputApellidoUpd = document.getElementById("inputApellidoUpd").value;
  let inputDniUpd = document.getElementById("inputDniUpd").value;
  let id = document.getElementById("inputId").value;

  let objRepartidor = {
    rep_nom: inputNombreUpd,
    rep_ape: inputApellidoUpd,
    rep_dni: inputDniUpd,
  };

  console.log(objRepartidor);

  fetch(`${URL_BACKEND}/repartidor/${id}`, {
    method: "PUT",
    body: JSON.stringify(objRepartidor),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    response.json().then((data) => {
      location.reload();
    });
  });

  $("#addEmployeeModal").modal("hide");
};

//Eliminar Repartidor
formDelete.onsubmit = (e) => {
  e.preventDefault();
  let id = $("#tabla input[type='checkbox']:checked").val();

  $("input[type=checkbox]:checked").each(function(){
    //cada elemento seleccionado
    fetch(`${URL_BACKEND}/repartidor/${$(this).val()}`, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((data) => {
        $("#tabla input[type='checkbox']:checked").closest("tr").remove();
        location.reload();
      });
    });
    
  });

  

  $("#addEmployeeModal").modal("hide");
};

getRepartidores();
