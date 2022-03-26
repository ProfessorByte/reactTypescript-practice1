import { useForm } from "../hooks/useForm";

export const Formulario2 = () => {
  const initState = {
    postal: "ABC",
    ciudad: "Ottawa",
  };
  const { formulario, handleChange } = useForm(initState);
  const { postal, ciudad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="postal" className="form-label">
          Código postal:
        </label>
        <input
          id="postal"
          type="text"
          className="form-control"
          name="postal"
          value={postal}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="ciudad" className="form-label">
          Ciudad:
        </label>
        <input
          id="ciudad"
          type="text"
          className="form-control"
          name="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
