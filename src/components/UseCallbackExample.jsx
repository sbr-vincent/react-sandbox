import React, {useState, useCallback} from 'react'
// Only really used for performance issues
function UseCallbackExample() {
    const [tasks, setTasks] = useState([])

    const addTask = useCallback(() => {
        setTasks((prevState)=> [...prevState, "Some Task"])
    }, [setTasks])


    return (
        <div>
            <Button addTask={addTask}/>
            {tasks.map((task, index) => (
                <p key={index}>{task}</p>
            ))}
        </div>
    )
}

const Button = React.memo(({addTask}) => {
    console.log("Button rendered")
    return <div> <button className='btn btn-danger' onClick={addTask}>Add Task</button> </div>
})

export default UseCallbackExample