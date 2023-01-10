import React from "react";

const Patient = ({ patient, setPatient, deletePatient }) => {
  // destroy
  const { namePet, nameOwner, email, dateHigh, symptoms, id } = patient;

  const handleDelete = () => {
    // el confirm es como un alert
    const response = confirm("Deseas eliminar este paciente?");

    if (response) {
      deletePatient(id);
    }
  };

  return (
    <div className="m-3 shadow-md bg-white px-5 py-10 rounded-xl mx-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{namePet}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{nameOwner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{dateHigh}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-around pt-3">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patient;
