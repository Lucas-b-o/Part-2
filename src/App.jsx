const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map((part) => <Part part={part} key={part.name}/>)}
  </>

const Total = ({parts}) => 
  <>
    <p><strong>total of {
      parts.reduce((sum, part) => {
        return sum + part.exercises
      },0)
      } exercises</strong></p>
  </>


const Course = ({ course, parts }) =>
  <>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
  </>

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
    {
      name: 'Redux',
      exercises: 11
    }
  ]

  return (
    <Course course={course} parts={parts} />
  )
}

export default App