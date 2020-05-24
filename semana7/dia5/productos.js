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

//Traer los productos
const getProductos = () => {
  const dibujar = (productos) => {
    productos.forEach((producto) => {
      $("#tabla tbody").append(
        `<tr>
            <td>
              <span class="custom-checkbox">
                <input
                  type="checkbox"
                  id="${producto.id}"
                  name="options[]"
                  value="${producto.id}"
                />
                <label for="checkbox1"></label>
              </span>
            </td>
            <td>${producto.pro_nom}</td>
            <td>${producto.pro_prec}</td>
            <td id="td-img"><img src="${producto.pro_img}" alt=""></td>
            <td>
                <a href="#editEmployeeModal" id="${producto.id}" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
          </tr>`
      );
    });

    //llenar modal editar
    $("#tabla .edit").on("click", function (e) {
      var row = $(e.currentTarget).parent().parent();
      var celdas = row.children();
      let inputNombreUpd = $(celdas[1]).text();
      let inputPrecioUpd = $(celdas[2]).text();
      let inputImagenUpd = $(celdas[3]).children().attr("src");
      
      $("#inputId").val(e.currentTarget.id);
      $("#inputNombreUpd").val(inputNombreUpd);
      $("#inputPrecioUpd").val(inputPrecioUpd);
      $("#inputImagenUpd").val(inputImagenUpd);
    });
  };

  let endpoint = `${URL_BACKEND}/producto`;
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dibujar(data);
    });
};

//Agregar Producto
formAdd.onsubmit = (e) => {
  e.preventDefault();
  console.log("add");
  inputNombre = document.getElementById("inputNombre").value;
  inputPrecio = document.getElementById("inputPrecio").value;
  inputImagen = document.getElementById("inputImagen").value;

  let objProducto = {
    pro_nom: inputNombre,
    pro_prec: inputPrecio,
    pro_img: inputImagen
  };

  console.log(objProducto);

  fetch(`${URL_BACKEND}/producto`, {
    method: "POST",
    body: JSON.stringify(objProducto),
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

//Actualizar Producto
formUpdate.onsubmit = (e) => {
  e.preventDefault();

  let inputNombreUpd = document.getElementById("inputNombreUpd").value;
  let inputPrecioUpd = document.getElementById("inputPrecioUpd").value;
  let inputImagenUpd = document.getElementById("inputImagenUpd").value;
  let id = document.getElementById("inputId").value;

  let objProducto = {
    pro_nom: inputNombreUpd,
    pro_prec: inputPrecioUpd,
    pro_img: inputImagenUpd,   
  };

  console.log(objProducto);

  fetch(`${URL_BACKEND}/producto/${id}`, {
    method: "PUT",
    body: JSON.stringify(objProducto),
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

//Eliminar Producto
formDelete.onsubmit = (e) => {
  e.preventDefault();
  let id = $("#tabla input[type='checkbox']:checked").val();

  $("input[type=checkbox]:checked").each(function(){
    //cada elemento seleccionado
    fetch(`${URL_BACKEND}/producto/${$(this).val()}`, {
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

getProductos();











