import React from "react";
import Patient from "./Patient";

const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <section className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll pb-5">
      {patients.length === 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-5 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold ">
              y apareceran en este lugar
            </span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-5 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold ">
              Pacientes y citas
            </span>
          </p>
          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default PatientList;
