import styles from "./form.module.css";

function Form() {
  return (
    <form className={styles.form}>
      <label className={styles.formLabel} htmlFor="altura">
        Altura
      </label>
      <input
        className={styles.formInput}
        type="number"
        id="altura"
        placeholder="cm"
        required
        min="1"
        max="300"
      />

      <label className={styles.formLabel} htmlFor="peso">
        Peso
      </label>
      <input
        className={styles.formInput}
        type="number"
        id="peso"
        placeholder="Kg"
        required
        min="1"
        max="1000"
      />

      <button className={styles.formButton} type="submit">
        Calcular
      </button>
    </form>
  );
}

export default Form;
