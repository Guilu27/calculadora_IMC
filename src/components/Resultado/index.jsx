import styles from "./resultado.module.css";

function Resultado({ resultado, mensagem, resultadoClass }) {
  const classeCSS = `${styles.resultado} ${resultadoClass}`;

  return (
    <div className={classeCSS}>
      <h2 className={styles.resultadoIMC}>Seu IMC é: {resultado} Kg/m2</h2>
      <p className={styles.resultadoTexto}>{mensagem}</p>
    </div>
  );
}

export default Resultado;
