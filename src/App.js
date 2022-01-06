import React from 'react'

const Title = ({tittle}) => <h1>{tittle}</h1>

const Notas = ({materia, calificacion}) => {
  return <p>{materia} {calificacion}</p>
}

const TotalCalificacion = (props) => {
  const { exercises1, exercises2, exercises3 } = props;
  return <p> Number of exercises {exercises1 + exercises2 + exercises3} </p>
} 

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title tittle={course} />
      <Notas materia={part1} calificacion={exercises1} />
      <Notas materia={part2} calificacion={exercises2} />
      <Notas materia={part3} calificacion={exercises3} />
      <TotalCalificacion 
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

export default App