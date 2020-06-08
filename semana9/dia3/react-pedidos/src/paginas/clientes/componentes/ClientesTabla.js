import React from 'react'
import ClienteFila from './ClienteFila'

const ClientesTabla = ({ clientes, setObjCliente }) => {
  return (
    <table className="table table-hover table-bordered table-striped">
      <thead>
        <tr>
          <th><strong>#</strong></th>
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Estado</th>
          <th>Dni</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          clientes.map((cliente, i) => {
            return <ClienteFila numero={i}
              cliente={cliente}
              key={cliente.id}
              setObjCliente={setObjCliente} />
          })
        }
      </tbody>
    </table>
  )
}

export default ClientesTabla
