import s from "./TodoList.module.css"

const Todo = ({ todo, toggleTask, removeTask }) => {
    return (
        <div key={todo.id} className={todo.complete ? "item-text strike" : 'item-text'} onClick={() => toggleTask(todo.id)}>
            <div>
                {todo.task}
                <span className={s.itemdelete} onClick={() => { removeTask(todo.id) }}>
                    X
                </span>
            </div>
        </div>
    )
}

export default Todo