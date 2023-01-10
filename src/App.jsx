import { useEffect, useState } from "react";
import Form from "./components/forms/Form";
import PatientList from "./components/patientList/PatientList";
import Header from "./components/shared/Header";

function App() {
  const [patients, setPatients] = useState([]);

  const [patient, setPatient] = useState({});

  useEffect(() => {
    const obtainLS = () => {
      // como lo que se almacena en localStorage es un string, con JSON.parse() lo convertimos a un array.
      const patientsLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPatients(patientsLS);
    };

    obtainLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    // aqui saco los pacientes que sean diferentes al id que recibo como parametro, dicho ID es el que se envia al darle click en el boton "eliminar".
    const pacienteFiltrado = patients.filter((e) => e.id !== id);

    setPatients(pacienteFiltrado);
  };

  return (
    <div className="container mx-auto">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />

        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
