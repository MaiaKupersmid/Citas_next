"use client"

import Form from "@/componentes/Form/Form";
import Listado from "@/componentes/Listado/Listado";
import {useState} from "react"

export default function Reservas () {
  const [citas,setCitas] = useState([])
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <Form setCitas={setCitas} citas={citas}/>
          </div>
          <div class="one-half column">
            <h2>Administra tus citas</h2>
            <Listado citas={citas} setCitas={setCitas}/>
          </div>
        </div>
      </div>       
    </>
  );
}
