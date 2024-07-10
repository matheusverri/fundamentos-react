const FichaDeTreino = ({nome, series, repeticoes, i}) => {
  return(
    <>
      <hr />
      <h1>Exercício {i+1}: {nome}</h1>
      <p>Séries: {series}</p>
      <p>Repetições: {repeticoes}</p>
    </>
  )
}

export default FichaDeTreino