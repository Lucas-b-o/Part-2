const Header = ({ course }) => <h3>{course}</h3>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map((part) => <Part part={part} key={part.name} />)}
  </>

const Total = ({ parts }) =>
  <>
    <p><strong>total of {
      parts.reduce((sum, part) => {
        return sum + part.exercises
      }, 0)
    } exercises</strong></p>
  </>


const Course = ({ course, parts }) =>
  <>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
  </>

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map((course) =>
        <Course key={course.id} course={course.name} parts={course.parts} />
      )}
    </>
  )
}

export default App