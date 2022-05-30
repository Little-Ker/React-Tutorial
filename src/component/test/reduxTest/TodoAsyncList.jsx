import React from "react"
import { useSelector } from "react-redux"

function TodoAsyncList() {
    const states = useSelector((state) => state.todoAsync) // <-- 拿取資料
    console.log('states',states)
    return (
        <ul className="text-center">
        {states.todoList.map((i) => (
            <li key={i.id}>{i.name}</li>
        ))}
        </ul>
    )
}

export default TodoAsyncList