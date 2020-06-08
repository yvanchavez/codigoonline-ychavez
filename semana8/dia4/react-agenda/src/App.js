import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Contactos from './components/Contactos';
import ContactoSeleccionado from './components/ContactoSeleccionado';

function App() {

  // Traemos los contactos desde el Local Storage
  let contactosLS = JSON.parse(localStorage.getItem("contactos"));
  // Si al traer los contactos del LS, no habia niguno o 
  // que estaba indefinido
  if (!contactosLS) {
    // crear un arreglo vacio como para inicializar contactosLS
    contactosLS = [];
  }

  // Iniciar los contactos con los del LS o en su defecto con un arreglo vacio
  const [contactos, setContactos] = useState(contactosLS);

  const [contactoselec, setContactoSelec] = useState({});

  const agregarContacto = (objContacto) => {
    let contactosAntiguos = [...contactos, objContacto];
    localStorage.setItem("contactos", JSON.stringify(contactosAntiguos));
    setContactos(contactosAntiguos);
  }

  return (
    <Fragment>
      <Header />
      <main className="container-fluid">
        <h1 className="display-3 text-center">Agenda<span className="text-danger">APP</span></h1>
        <div className="row">
          <div className="col">
            <Formulario agregarContacto={agregarContacto} />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            {/* Lista de contactos */}
            <Contactos contactos={contactos} setContactoSelec={setContactoSelec} />
          </div>
          <div className="col-md-6">
            {/* Contacto seleccionado */}
            <ContactoSeleccionado contactoselec={contactoselec} />
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;