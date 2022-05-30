import React from "react"
import styles from './todoListView.module.sass'

import TodoAxiosList from "../../test/reduxTest/TodoAxiosList"

function TodoAxiosView() {
    return (
        <div className={`text-center ${styles.todoListView}`}>
            <h1>TodoList</h1>
            <TodoAxiosList />
        </div>
    )
}

export default TodoAxiosView