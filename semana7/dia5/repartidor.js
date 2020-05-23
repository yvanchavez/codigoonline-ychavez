const URL_BACKEND = "https://5ec8650b155c130016a909e3.mockapi.io";
formAdd = document.getElementById("formAdd");

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
                  value="1"
                />
                <label for="checkbox1"></label>
              </span>
            </td>
            <td>${repartidor.rep_nom}</td>
            <td>${repartidor.rep_ape}</td>
            <td>${repartidor.rep_dni}</td>
            <td>
                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
          </tr>`
      );
      // let option = document.createElement("option");
      // option.innerText = `${repartidor.rep_nom} ${repartidor.rep_ape}`;
      // option.value = repartidor.id;
      //option.setAttribute("value",repartidor.id)
      //selectRepartidor.appendChild(option);
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

getRepartidores();
