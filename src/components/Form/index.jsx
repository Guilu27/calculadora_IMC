import { useState } from "react";
import styles from "./form.module.css";

function Form({ calcularIMC }) {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const handleAlturaChange = (e) => setAltura(e.target.value);
  const handlePesoChange = (e) => setPeso(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    calcularIMC(altura, peso);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.formLabel} htmlFor="altura">
        Altura (cm)
      </label>
      <input
        className={styles.formInput}
        type="number"
        id="altura"
        required
        min="1"
        max="300"
        value={altura}
        onChange={handleAlturaChange}
      />

      <label className={styles.formLabel} htmlFor="peso">
        Peso (Kg)
      </label>
      <input
        className={styles.formInput}
        type="number"
        id="peso"
        required
        min="1"
        max="1000"
        value={peso}
        onChange={handlePesoChange}
      />

      <button className={styles.formButton} type="submit">
        Calcular
      </button>
    </form>
  );
}

export default Form;
