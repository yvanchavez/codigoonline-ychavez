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

//Traer los clientes
const getClientes = () => {
  const dibujar = (clientes) => {
    clientes.forEach((cliente) => {
      $("#tabla tbody").append(
        `<tr>
            <td>
              <span class="custom-checkbox">
                <input
                  type="checkbox"
                  id="${cliente.id}"
                  name="options[]"
                  value="${cliente.id}"
                />
                <label for="checkbox1"></label>
              </span>
            </td>
            <td>${cliente.cli_nom}</td>
            <td>${cliente.cli_ape}</td>
            <td>${cliente.cli_dni}</td>
            <td>
                <a href="#editEmployeeModal" id="${cliente.id}" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
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

  let endpoint = `${URL_BACKEND}/cliente`;
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dibujar(data);
    });
};

//Agregar Cliente
formAdd.onsubmit = (e) => {
  e.preventDefault();
  console.log("add");
  inputNombre = document.getElementById("inputNombre").value;
  inputApellido = document.getElementById("inputApellido").value;
  inputdni = document.getElementById("inputDni").value;

  let objCliente = {
    cli_nom: inputNombre,
    cli_ape: inputApellido,
    cli_dni: inputdni,
  };

  console.log(objCliente);

  fetch(`${URL_BACKEND}/cliente`, {
    method: "POST",
    body: JSON.stringify(objCliente),
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

  let objCliente = {
    cli_nom: inputNombreUpd,
    cli_ape: inputApellidoUpd,
    cli_dni: inputDniUpd,   
  };

  console.log(objCliente);

  fetch(`${URL_BACKEND}/cliente/${id}`, {
    method: "PUT",
    body: JSON.stringify(objCliente),
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

//Eliminar Cliente
formDelete.onsubmit = (e) => {
  e.preventDefault();
  let id = $("#tabla input[type='checkbox']:checked").val();

  $("input[type=checkbox]:checked").each(function(){
    //cada elemento seleccionado
    fetch(`${URL_BACKEND}/cliente/${$(this).val()}`, {
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

getClientes();











