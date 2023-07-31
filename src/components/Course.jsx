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

export default Course