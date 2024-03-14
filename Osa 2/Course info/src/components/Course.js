import React from "react"

const Header = (props) => <h2>{props.course.name}</h2>

const Content = (props) => {
    return (
        <div>
            {props.course.parts.map(part =>
                <Parts key={part.id} name={part.name} exercises={part.exercises} />)}
        </div>
    )
}

const Parts = (props) => <p>{props.name} {props.exercises}</p>

const Total = (props) => {
    const total = props.course.parts.reduce((total, part) =>
        total + part.exercises, 0)
    return (
        <b>total of {total} exercises</b>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header course={props.course} />
            <Content course={props.course} />
            <Total course={props.course} />
        </div>
    )
}


export default Course