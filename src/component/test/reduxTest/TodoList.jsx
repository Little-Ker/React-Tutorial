import { useSelector } from "react-redux"

function TodoList() {
    const states = useSelector((state) => state.todoList) // <-- 拿取資料
    console.log('states',states)
    return (
        <ul className="text-center">
        {states.todoList.map((i) => (
            <li key={i.id}>{i.name}</li>
        ))}
        </ul>
    )
}

export default TodoList