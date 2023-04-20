const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
      }
    ]
  }
  

const Part = (props) => {
  return (
    <p> {props.part} {props.exercise} </p>
  )
}

const Header = (props) => {
  return (
    <h1> {props.course.name} </h1>
  )
}

const Content = (props) => {
  const parts = props.course["parts"]
  const [part1, part2, part3] = parts
  return (
    <>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
    </>
  )
    
}

const Total = ({course}) => {
  return (
    <p>Number of exercises {course.parts[0].exercises +
       course.parts[1].exercises + course.parts[2].exercises}</p>
  )
}

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App