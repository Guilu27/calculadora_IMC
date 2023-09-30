import { useState } from "react";
import Form from "./components/Form";
import Resultado from "./components/Resultado";
import Header from "./components/Header";

import "./global.css";

function App() {
  const [imc, setIMC] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [resultadoClass, setResultadoClass] = useState("");

  const calcularIMC = (altura, peso) => {
    const alturaMetros = Number(altura / 100);
    const pesoKg = Number(peso);

    const resultado = pesoKg / (alturaMetros * alturaMetros);
    setIMC(resultado.toFixed(2));

    if (resultado < 18.5) {
      setMensagem("Peso Baixo");
      setResultadoClass("baixoPeso");
    } else if (resultado < 24.9) {
      setMensagem("Peso normal");
      setResultadoClass("pesoNormal");
    } else if (resultado < 29.9) {
      setMensagem("Excesso de peso");
      setResultadoClass("excessoPeso");
    } else if (resultado < 34.9) {
      setMensagem("Obesidade classe 1");
      setResultadoClass("obesidade1");
    } else if (resultado < 39.9) {
      setMensagem("Obesidade classe 2");
      setResultadoClass("obesidade2");
    } else {
      setMensagem("Obesidade classe 3");
      setResultadoClass("obesidade3");
    }
  };

  return (
    <div className="container">
      <div className="content">
        <Header />
        <Form calcularIMC={calcularIMC} />
        {imc !== 0 && (
          <Resultado
            resultado={imc}
            mensagem={mensagem}
            resultadoClass={resultadoClass}
          />
        )}
      </div>
    </div>
  );
}

export default App;
