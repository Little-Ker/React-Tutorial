import styles from './todoListView.module.sass'

import TodoList from "./TodoList"
import { useDispatch } from 'react-redux'
import { addTodo } from '../../../redux/todoSlice'

function TodoListView() {
    const dispatch = useDispatch()
    return (
        <div className={styles.todoListView}>
            <h1>TodoList</h1>
            <TodoList />
            <div onClick={() => dispatch(addTodo('test'))} className={`btn ${styles.btn}`}>新增事項</div>
        </div>
    )
}

export default TodoListView