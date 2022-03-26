import { useForm } from "../hooks/useForm";

export const Formulario = () => {
  const initState = {
    email: "fernando@gmail.com",
    nombre: "Fernando Herrera",
    edad: 35,
  };
  const { email, nombre, edad, handleChange, formulario } =
    useForm<typeof initState>(initState); // Tambien funciona si no se especifica el tipo de dato
  // const { email, nombre, edad } = formulario;

  // const [formulario, setFormulario] = useState({
  //   email: "",
  //   nombre: "",
  // });

  // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = target;
  //   setFormulario({
  //     ...formulario,
  //     [name]: value,
  //   });
  // };

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          id="email"
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre:
        </label>
        <input
          id="nombre"
          type="text"
          className="form-control"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="edad" className="form-label">
          Edad:
        </label>
        <input
          id="edad"
          type="number"
          className="form-control"
          name="edad"
          value={edad}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
