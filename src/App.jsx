import { useState } from 'react'
import Challenge from './components/Challenge'
import './App.css'
import ImprimirLista from './components/ImprimirLista'
import Props from './components/Props'
import FichaDeTreino from './components/ImprimirListaComProps'

function App() {

  const Exercicios = [
    {id: 1, nome: "Supino", series: 4, repeticoes: 10},
    {id: 2, nome: "Cross Polia Alta", series: 4, repeticoes: 10},
    {id: 3, nome: "Cross Polia Baixa", series: 4, repeticoes: 5},
    {id: 4, nome: "Flexão Declinada", series: 4, repeticoes: 10},
  ]

  return (
    <>
      {Exercicios.map((exercicio, i) => (
        <FichaDeTreino key={exercicio.id} nome={exercicio.nome} series={exercicio.series} repeticoes={exercicio.repeticoes} i={i}  />
      ))}
    </>
  )
}

export default App
