import { useState } from "react"

const ImprimirLista = () => {

  const [lista] = useState(["Mateus", "Marcos", "Lucas", "João"]);

  return (
    <>
      <ul>
        {lista.map((item, i) => <li key={i} >{item}</li>)}
      </ul>
    </>
  )
}

export default ImprimirLista