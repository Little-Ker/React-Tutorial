import React from "react"
import styles from './todoListView.module.sass'

import TodoAsyncList from "../../test/reduxTest/TodoAsyncList"
import { useDispatch } from 'react-redux'
import { todoAsync } from '../../../redux/todoAsyncSlice'

function TodoAsyncView() {
    const dispatch = useDispatch()
    return (
        <div className={styles.todoListView}>
            <h1>TodoList</h1>
            <TodoAsyncList />
            <div onClick={() => dispatch(todoAsync('test'))} className={`btn ${styles.btn}`}>延遲新增事項</div>
        </div>
    )
}

export default TodoAsyncView