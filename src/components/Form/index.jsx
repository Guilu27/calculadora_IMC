function Form() {
  return (
    <form>
      <label htmlFor="altura">Altura</label>
      <input type="number" id="altura" placeholder="cm" />

      <label htmlFor="peso">Peso</label>
      <input type="number" id="peso" placeholder="Kg" />
    </form>
  );
}

export default Form;
