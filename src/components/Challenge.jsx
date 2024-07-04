let n1 = 20;
let n2 = 1;

const somar = () => {console.log(n1+n2)}

const Challenge = () => {
  return(
    <>
      <p>Número 1: {n1}</p>
      <p>Número 2: {n2}</p>
      
      <button onClick={somar}>Somar</button>
    </>
  )
}

export default Challenge