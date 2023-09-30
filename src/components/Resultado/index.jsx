import styles from "./resultado.module.css";

function Resultado() {
  return (
    <div className={styles.resultado}>
      <h2 className={styles.resultadoIMC}>26,4</h2>
      <p className={styles.resultadoTexto}>Voce esta acima do peso</p>
    </div>
  );
}

export default Resultado;
