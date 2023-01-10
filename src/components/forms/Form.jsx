import React, { useEffect, useState, setPatient } from "react";
import Errors from "../errors/Errors";

const Form = ({ patients, setPatients, patient }) => {
  const [namePet, setNamePet] = useState("");
  const [nameOwner, setNameOwner] = useState("");
  const [email, setEmail] = useState("");
  const [dateHigh, setDateHigh] = useState("");
  const [symptoms, setSymptoms] = useState("");

  // manejo de errores.
  const [errorNamePet, setErrorNamePet] = useState(false);

  useEffect(() => {
    // comprobamos que haya algun paciente para editar y si lo hay, seteamos la data a los state.
    if (Object.keys(patient).length > 0) {
      setNamePet(patient.namePet);
      setNameOwner(patient.nameOwner);
      setEmail(patient.email);
      setDateHigh(patient.dateHigh);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  // generar un id diferente para cada paciente.
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  // envio de datos del form.
  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion
    if ([namePet, nameOwner, email, dateHigh, symptoms].includes("")) {
      setErrorNamePet(true);
      setTimeout(() => {
        setErrorNamePet(false);
      }, 5000);
    } else {
      // data del paciente/
      let nuevoPaciente = {
        namePet,
        nameOwner,
        email,
        dateHigh,
        symptoms,
      };

      // esto sera true solo cuando le de en "editar" a un paciente
      if (patient.id) {
        // editando registro

        // le agrego el mismo id que ya tenia cuando se creo
        nuevoPaciente.id = patient.id;

        // aqui pregunto si algun paciente tiene el mismo ID del paciente que estoy editando, entonces modifica esos datos, si no, no hace nada.
        const updatedPatients = patients.map((patientState) =>
          patientState.id === patient.id ? nuevoPaciente : patientState
        );
        setPatients(updatedPatients);

        // una vez que ya editamos el usuario, limpiamos el state donde se almacena.
        setPatient({});
      } else {
        // nuevo registro

        // le agrego un nuevo campo al objeto, el campo ID con la funcion generate()
        nuevoPaciente.id = generarId();
        // agregamos el nuevo paciente.
        setPatients([...patients, nuevoPaciente]);
      }

      // limpiamos los campos del formulario.
      setNamePet("");
      setNameOwner("");
      setEmail("");
      setDateHigh("");
      setSymptoms("");
    }
  };

  return (
    <section className="md:w-1/2 lg:w-2/5 pb-10">
      <h2 className="font-black text-2xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-6 text-center mb-5">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>
      <form
        className="bg-white shadow-md rounden-lg py-10 px-5 rounded-xl mx-5"
        onSubmit={handleSubmit}
      >
        {errorNamePet && (
          <Errors message={"Todos los campos son obligatorios"} />
        )}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="namepet"
          >
            Nombre Mascota
          </label>
          <input
            id="namepet"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            value={namePet}
            onChange={(e) => setNamePet(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="ownername"
          >
            Nombre del Propietario
          </label>
          <input
            id="ownername"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            value={nameOwner}
            onChange={(e) => setNameOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="high"
          >
            Alta
          </label>
          <input
            id="high"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            value={dateHigh}
            onChange={(e) => setDateHigh(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptoms"
          >
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded textAre"
            placeholder="Describe los síntomas"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors mb-10"
          value={patient.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </section>
  );
};

export default Form;
